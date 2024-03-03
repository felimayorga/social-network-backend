import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.userRepository.findOne({
        email: createUserDto.email,
      });

      if (existingUser) {
        throw new BadRequestException('User already exists');
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        return this.userRepository.create({
          ...createUserDto,
        });
      } else {
        throw error;
      }
    }
  }

  async findOne(_id: string) {
    return this.userRepository.findOne({ _id });
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.findOneAndUpdate(
      { _id },
      { $set: updateUserDto },
    );
  }

  async remove(_id: string) {
    return this.userRepository.findOneAndDelete({ _id });
  }
}
