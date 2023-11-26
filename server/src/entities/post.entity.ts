import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { UserEntityDocument } from './user.entity';

@Schema()
export class PostEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  location: string;

  @Prop({
    type: { user: { type: MongooseSchema.Types.ObjectId, ref: 'UserEntity' }, fullName: String, imageUrl: String },
    required: true,
  })
  user: UserEntityDocument
}

export type PostEntityDocument = PostEntity & Document;

export const PostEntitySchema = SchemaFactory.createForClass(PostEntity);
