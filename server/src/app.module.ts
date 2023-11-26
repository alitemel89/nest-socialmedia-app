import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { config } from 'dotenv';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
