import { AbstractDocument } from '@app/common';
import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    },
  },
  toObject: {
    transform: function (doc, ret) {
      delete ret.password;
      return ret;
    },
  },
})
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
