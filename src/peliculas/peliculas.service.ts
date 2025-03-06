import { Injectable } from '@nestjs/common';
import { Pelicula } from './entities/pelicula.entity';

@Injectable()
export class PeliculasService {
  private peliculas: Pelicula[] = [
    { id: 1, titulo: 'El Señor de los Anillos', anio: 2001, categoria: 'Fantasia', nombre: 'Pelicula 1' },
    { id: 2, titulo: 'Harry Potter', anio: 2001, categoria: 'Fantasia', nombre: 'Pelicula 2' },
    { id: 3, titulo: 'Star Wars', anio: 1977, categoria: 'Ciencia Ficcion', nombre: 'Pelicula 3' },
  ];

  findAll(): Pelicula[] {
    return this.peliculas;
  }

  findByTitulo(titulo: string): Pelicula[] {
    return this.peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
  }

  findByAnioMenorQue(anio: number): Pelicula[] {
    return this.peliculas.filter(pelicula => pelicula.anio < anio);
  }

  findByNombre(nombre: string): Pelicula[] {
    return this.peliculas.filter(pelicula =>
      pelicula.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  findByCategoria(categoria: string): Pelicula[] {
    return this.peliculas.filter(pelicula =>
      pelicula.categoria.toLowerCase().includes(categoria.toLowerCase())
    );
  }
}