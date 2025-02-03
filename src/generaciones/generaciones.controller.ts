import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GeneracionesService } from './generaciones.service';
import { CreateGeneracioneDto } from './dto/create-generacione.dto';
import { UpdateGeneracioneDto } from './dto/update-generacione.dto';

@Controller('generaciones')
export class GeneracionesController {
  constructor(private readonly generacionesService: GeneracionesService) {}

  @Post()
  create(@Body() createGeneracioneDto: CreateGeneracioneDto) {
    return this.generacionesService.create(createGeneracioneDto);
  }

  @Get()
  findAll() {
    return this.generacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generacionesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGeneracioneDto: UpdateGeneracioneDto) {
    return this.generacionesService.update(+id, updateGeneracioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generacionesService.remove(+id);
  }
}
