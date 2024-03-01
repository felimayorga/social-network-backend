import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { PostsModule } from './posts.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
