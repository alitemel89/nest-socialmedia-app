import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity, UserEntityDocument } from 'src/entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity.name)
    private readonly userModel: Model<UserEntityDocument>,
  ) {}

  async create(user: CreateUserDto): Promise<UserEntity> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
