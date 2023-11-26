import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { PostService } from './post.service';
import { PostEntitySchema, PostEntity } from 'src/entities/post.entity'; // Import PostEntity
import { PostController } from './post.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: PostEntity.name, schema: PostEntitySchema }])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
