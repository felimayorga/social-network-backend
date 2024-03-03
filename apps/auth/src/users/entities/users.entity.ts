import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true, collection: 'users' })
export class User extends AbstractDocument {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post', default: [] }] })
  posts?: any[];
}

export const UserSchema = SchemaFactory.createForClass(User);
