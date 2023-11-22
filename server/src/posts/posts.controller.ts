// controllers/posts.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from '../entities/post.entity';
import { CreatePostDto } from 'src/dto/post.dto';
import { ObjectId } from 'mongodb';


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: CreatePostDto): Promise<PostEntity> {
    return this.postsService.create(post);
  }

  @Put(':id') // Use @Put decorator for the update method
  update(@Param('id') id: ObjectId, @Body() post: CreatePostDto): Promise<PostEntity> {
    return this.postsService.update(id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId): Promise<void> {
    return this.postsService.delete(id);
  }
}
