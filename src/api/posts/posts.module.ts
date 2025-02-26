import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Posts],"base1")], 
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
