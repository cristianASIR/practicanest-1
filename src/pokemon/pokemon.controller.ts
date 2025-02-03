import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.create(createPokemonDto);
  }

  //Devuelve un array con los "pokemon" que encuentra
  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }
  @Get('query')
  async rutaQuery(@Query('nombre') nombre:string):Promise<Pokemon[]>{
    return this.pokemonService.buscaNombre(nombre);
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pokemon> {
    return this.pokemonService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  //Al eliminar no devuelve valores (void/undefined)
  async remove(@Param('id') id: string): Promise<void> {
    await this.pokemonService.remove(+id);
  }
  @Get('tipo/:tipo')
  async findByEmail(@Param('email') tipo: string): Promise<Pokemon> {
    const pokemon = await this.pokemonService.findByTipo(tipo);
    if (!pokemon) {
      throw new NotFoundException(`Usuario de tipo ${tipo} no encontrado`);
    }
    return pokemon;
  }

  @Put(':id/activate')
  async activateUser(@Param('id') id: string): Promise<Pokemon> {
    return await this.pokemonService.activatePokemon(+id);
  }
  @Put(':id/deactivate')
  async deactivateUser(@Param('id') id: string): Promise<Pokemon> {
    return await this.pokemonService.deactivatePokemon(+id);
  }
}
