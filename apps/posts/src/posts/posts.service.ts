import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repository/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async create(createPostDto: CreatePostDto) {
    return this.postsRepository.create(createPostDto);
  }

  async findAll() {
    return this.postsRepository.find({});
  }

  async findOne(_id: string) {
    return this.postsRepository.findOne({ _id });
  }

  async update(_id: string, updatePostDto: UpdatePostDto) {
    return this.postsRepository.findOneAndUpdate(
      { _id },
      { $set: updatePostDto },
    );
  }

  remove(_id: string) {
    return this.postsRepository.findOneAndDelete({ _id });
  }
}
