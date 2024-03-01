import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreatePostRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  @IsPositive()
  @Min(0)
  likes: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  userId: number;
}
