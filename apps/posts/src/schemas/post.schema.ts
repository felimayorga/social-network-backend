import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Post extends AbstractDocument {
  @Prop({ required: true })
  title: string;

  @Prop({ default: '' })
  content?: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: null })
  deletedAt?: Date;

  @Prop()
  userId: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
