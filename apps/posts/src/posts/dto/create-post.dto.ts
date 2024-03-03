import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  content?: string;

  @IsString()
  @IsNotEmpty()
  user: string;
}
