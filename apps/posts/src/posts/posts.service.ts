import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repository/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async create(createPostDto: CreatePostDto, userId: string) {
    return this.postsRepository.create({ ...createPostDto, userId });
  }

  async findAll() {
    return this.postsRepository.find({ deletedAt: null });
  }

  async findOne(_id: string) {
    return this.postsRepository.findOne({ _id, deletedAt: null });
  }

  async update(_id: string, updatePostDto: UpdatePostDto) {
    return this.postsRepository.findOneAndUpdate(
      { _id, deletedAt: null },
      { $set: updatePostDto },
    );
  }

  remove(_id: string) {
    return this.postsRepository.findOneAndUpdate(
      { _id, deletedAt: null },
      { $set: { deletedAt: Date.now() } },
    );
  }
}
