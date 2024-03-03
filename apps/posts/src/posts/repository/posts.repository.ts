import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Post } from '../entities/post.entity';

@Injectable()
export class PostsRepository extends AbstractRepository<Post> {
  protected readonly logger = new Logger(Post.name);

  constructor(
    @InjectModel(Post.name) protected readonly postModel: Model<Post>,
  ) {
    super(postModel);
  }
}
