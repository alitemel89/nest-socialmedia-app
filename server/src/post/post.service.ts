import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // Import InjectModel from @nestjs/mongoose
import { Model } from 'mongoose'; // Import Model from mongoose
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity, PostEntityDocument } from 'src/entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(PostEntity.name)
    private readonly postModel: Model<PostEntityDocument>,
  ) {}

  async findAll(): Promise<PostEntity[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<PostEntity> {
    return this.postModel.findById(id).exec();
  }

  async create(post: CreatePostDto): Promise<PostEntity> {
    const newPost = new this.postModel(post);
    return newPost.save();
  }

  async update(id: string, post: CreatePostDto): Promise<PostEntity> {
    const result = await this.postModel.findByIdAndUpdate(id, post).exec();

    if (!result) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return this.postModel.findById(id).exec();
  }

  async delete(id: string): Promise<void> {
    const result = await this.postModel.findByIdAndDelete(id).exec();

    if (!result) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
  }
}
