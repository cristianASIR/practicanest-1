import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [PostModule, UserModule],
})
export class ApiModule {}
