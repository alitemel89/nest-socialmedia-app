import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserEntity {
  @Prop()
  fullName: string;

  @Prop()
  imageUrl: string;
}

export type UserEntityDocument = UserEntity & Document;

export const UserEntitySchema = SchemaFactory.createForClass(UserEntity);