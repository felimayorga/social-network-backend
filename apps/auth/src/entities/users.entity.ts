import { User } from '@app/common';
import { SchemaFactory } from '@nestjs/mongoose';

export const UserSchema = SchemaFactory.createForClass(User);
