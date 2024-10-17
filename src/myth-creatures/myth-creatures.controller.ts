import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MythCreaturesService } from './myth-creatures.service';
import { CreateMythCreatureDto } from './dto/create-myth-creature.dto';
import { UpdateMythCreatureDto } from './dto/update-myth-creature.dto';

@Controller('myth-creatures')
export class MythCreaturesController {
  constructor(private readonly mythCreaturesService: MythCreaturesService) {}

  @Post()
  create(@Body() createMythCreatureDto: CreateMythCreatureDto) {
    return this.mythCreaturesService.create(createMythCreatureDto);
  }

  @Get('Greece')
  findAll() {
    return this.mythCreaturesService.findAllGreek();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mythCreaturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMythCreatureDto: UpdateMythCreatureDto) {
    return this.mythCreaturesService.update(+id, updateMythCreatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mythCreaturesService.remove(+id);
  }
}
