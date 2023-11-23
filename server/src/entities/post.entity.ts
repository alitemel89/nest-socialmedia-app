import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PostEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  imageUrl: string;

  @Prop()
  location: string;
}

export type PostEntityDocument = PostEntity & Document;

export const PostEntitySchema = SchemaFactory.createForClass(PostEntity);