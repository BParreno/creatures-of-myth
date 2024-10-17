import { PartialType } from '@nestjs/mapped-types';
import { CreateMythCreatureDto } from './create-myth-creature.dto';

export class UpdateMythCreatureDto extends PartialType(CreateMythCreatureDto) {}
