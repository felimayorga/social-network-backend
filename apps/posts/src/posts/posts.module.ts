import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';

import { Post, PostSchema } from './entities/post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './repository/posts.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
})
export class PostsModule {}
