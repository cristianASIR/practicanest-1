import { Module } from '@nestjs/common';
import { GeneracionesService } from './generaciones.service';
import { GeneracionesController } from './generaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Generacione } from './entities/generacione.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Generacione], 'base1') ],
  controllers: [GeneracionesController],
  providers: [GeneracionesService],
})
export class GeneracionesModule {}
