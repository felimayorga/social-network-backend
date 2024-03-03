import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repository/users.repository';
import { GetUserDto } from '../dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(_id: string) {
    return this.userRepository.findOne({ _id, deletedAt: null });
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.findOneAndUpdate(
      { _id, deletedAt: null },
      { $set: updateUserDto },
    );
  }

  async remove(_id: string) {
    return this.userRepository.findOneAndUpdate(
      { _id, deletedAt: null },
      { $set: { deletedAt: Date.now() } },
    );
  }

  async createUser(createUserDto: CreateUserDto) {
    await this.validateCreateUserDto(createUserDto);

    return this.userRepository.create({
      ...createUserDto,
      password: await bcryptjs.hash(createUserDto.password, 10),
    });
  }

  async verifyUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ email });
    const passwordIsValid = await bcryptjs.compare(password, user.password);

    if (!passwordIsValid) {
      throw new BadRequestException('Invalid credentials');
    }

    return user;
  }

  async getUser(getUserDto: GetUserDto) {
    return this.userRepository.findOne(getUserDto);
  }

  private async validateCreateUserDto(createUserDto: CreateUserDto) {
    try {
      await this.userRepository.findOne({ email: createUserDto.email });
    } catch (error) {
      return;
    }
    throw new UnprocessableEntityException('Email already exists');
  }
}
