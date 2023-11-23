import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostEntitySchema, PostEntity } from 'src/entities/post.entity'; // Import PostEntity

@Module({
  imports: [MongooseModule.forFeature([{ name: PostEntity.name, schema: PostEntitySchema }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
