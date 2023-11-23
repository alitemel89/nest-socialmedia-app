import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from 'src/dto/post.dto'; // Adjust the path based on your project structure
import { PostEntity } from 'src/entities/post.entity';

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

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() post: CreatePostDto, // Update to use CreatePostDto
  ): Promise<PostEntity> {
    return this.postsService.update(id, post);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.postsService.delete(id);
  }
}
