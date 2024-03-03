import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '../entities/users.entity';

@Injectable()
export class UserRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger(User.name);

  constructor(
    @InjectModel(User.name) protected readonly userModel: Model<User>,
  ) {
    super(userModel);
  }
}
