import { Controller, Get, Query } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from './entities/pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Get()
  findAll(): Pelicula[] {
    return this.peliculasService.findAll();
  }

  @Get('titulo')
  findByTitulo(@Query('titulo') titulo: string): Pelicula[] {
    return this.peliculasService.findByTitulo(titulo);
  }

  @Get('anio-menor-que')
  findByAnioMenorQue(@Query('anio') anio: number): Pelicula[] {
    return this.peliculasService.findByAnioMenorQue(anio);
  }

  @Get('nombre')
  findByNombre(@Query('nombre') nombre: string): Pelicula[] {
    return this.peliculasService.findByNombre(nombre);
  }

  @Get('categoria')
  findByCategoria(@Query('categoria') categoria: string): Pelicula[] {
    return this.peliculasService.findByCategoria(categoria);
  }
}