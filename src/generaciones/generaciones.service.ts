import { Injectable } from '@nestjs/common';
import { CreateGeneracioneDto } from './dto/create-generacione.dto';
import { UpdateGeneracioneDto } from './dto/update-generacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Generacione } from './entities/generacione.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeneracionesService {
  //Establecer la unicón con la Base de Datos
  constructor (@InjectRepository(Generacione,'base1')
  private generacioneRepository:Repository<Generacione>
){}
  create(createGeneracioneDto: CreateGeneracioneDto) {
    const generacione=this.generacioneRepository.create(createGeneracioneDto);
    return this.generacioneRepository.save(generacione);
  }

  findAll() {
    return `Todas las generaciones`;
  }

  findOne(id: number) {
    return `ID#${id} de la generación`;
  }

  update(id: number, updateGeneracioneDto: UpdateGeneracioneDto) {
    return `Actualización de ID#${id} de la generación`;
  }

  remove(id: number) {
    return `Eliminar #${id} generación`;
  }
}
