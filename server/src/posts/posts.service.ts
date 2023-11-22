// services/posts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post as PostEntity } from '../entities/post.entity';
import { CreatePostDto } from '../dto/post.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async create(post: CreatePostDto): Promise<PostEntity> {
    const newPost = this.postRepository.create(post);
    return await this.postRepository.save(newPost);
  }

  async update(id: ObjectId, post: CreatePostDto): Promise<PostEntity> {
    const existingPost = await this.postRepository.findOne({
      where: { id }, // Specify the type explicitly
    });
  
    if (!existingPost) {
      throw new NotFoundException(`Post with id ${id.toString()} not found`);
    }
  
    // Update the properties of the existing post with the new values
    this.postRepository.merge(existingPost, post);
  
    return await this.postRepository.save(existingPost);
  }

  async delete(id: ObjectId): Promise<void> {
    const result = await this.postRepository.delete(id.toString()); // Convert ObjectId to string

    if (result.affected === 0) {
      throw new NotFoundException(`Post with id ${id.toString()} not found`);
    }
  }
}
