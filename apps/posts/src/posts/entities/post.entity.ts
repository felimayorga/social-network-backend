import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true, collection: 'posts' })
export class Post extends AbstractDocument {
  @Prop({ required: true })
  title: string;

  @Prop({ default: '' })
  content?: string;

  @Prop({ default: 0 })
  likes?: number;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: any;
}

export const PostSchema = SchemaFactory.createForClass(Post);
