import {IsString, IsEmail, IsNotEmpty,MinLength} from 'class-validator';
export class CreatePokemonDto {
    @IsString() @IsNotEmpty()
    nombre: string;
    @IsString() @IsNotEmpty()
    tipo: string;
    @IsString() @IsNotEmpty()
    @MinLength(6)
    password: string;
    activo?: boolean;
}
