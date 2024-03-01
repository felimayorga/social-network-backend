import { Body, Controller, Post } from '@nestjs/common';

import { PostsService } from './posts.service';
import { CreatePostRequest } from './dto/create-order.request';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() request: CreatePostRequest) {
    return this.postsService.create(request);
  }
}
