import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from '../entities/post.entity';
import { CreatePostDto } from 'src/dto/post.dto';

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
}
