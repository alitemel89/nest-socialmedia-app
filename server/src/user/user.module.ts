import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity, UserEntitySchema } from 'src/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserEntity.name, schema: UserEntitySchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
