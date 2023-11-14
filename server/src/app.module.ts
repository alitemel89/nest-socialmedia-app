import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    url: process.env.MONGODB_URL,
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    retryAttempts: 5,
    retryDelay: 1000, // in milliseconds
  }), PostsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
