import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneracioneDto } from './create-generacione.dto';

export class UpdateGeneracioneDto extends PartialType(CreateGeneracioneDto) {}
