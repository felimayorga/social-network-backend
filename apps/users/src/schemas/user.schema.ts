import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;

  @Prop({ default: null })
  deletedAt?: Date;

  @Prop()
  posts: any[];
}
