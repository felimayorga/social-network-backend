import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

import { AbstractRepository } from '@app/common';
import { Post } from '../schemas/post.schema';

@Injectable()
export class PostRepository extends AbstractRepository<Post> {
  protected readonly logger = new Logger(PostRepository.name);

  constructor(
    @InjectModel(Post.name) postModel: Model<Post>,
    @InjectConnection() connecttion: Connection,
  ) {
    super(postModel, connecttion);
  }
}
