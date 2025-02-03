import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  //Conexión a la base de datos
  constructor(
    @InjectRepository(Pokemon,'base2')
    private pokemonRepository: Repository<Pokemon>
  ) { }
  //Primeras funciones asincronas que utilizamos
  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }


  async findOne(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({ where: { id } })
    return pokemon;
  }

  async update(id: number, updatePokemonDto: CreatePokemonDto) {
    const pokemon = await this.findOne(id);
    this.pokemonRepository.merge(pokemon, updatePokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  async remove(id: number):Promise<void> {
    const pokemon = await this.findOne(id);
    await this.pokemonRepository.remove(pokemon);
  }
  async findByTipo(tipo:string):Promise<Pokemon|void>{
    return await this.pokemonRepository.findOne({where:{tipo}});
  }
  async activatePokemon(id:number):Promise<Pokemon>{
    const pokemon=await this.pokemonRepository.findOne({where:{id}});
    pokemon.activo=true;
    return await this.pokemonRepository.save(pokemon);
  }
  async deactivatePokemon(id:number):Promise<Pokemon>{
    const pokemon=await this.pokemonRepository.findOne({where:{id}});
    pokemon.activo=false;
    return await this.pokemonRepository.save(pokemon);
  }
  async buscaNombre(nombre:string):Promise<Pokemon[]>{
    return this.pokemonRepository.find({where:{nombre}})
  }
}
