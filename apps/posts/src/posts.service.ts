import { Injectable } from '@nestjs/common';

import { CreatePostRequest } from './dto/create-order.request';
import { PostRepository } from './repository/post.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostRepository) {}

  async create(request: CreatePostRequest) {
    return this.postsRepository.create({
      ...request,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
    });
  }
}
