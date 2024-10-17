import { Injectable } from '@nestjs/common';
import { CreateMythCreatureDto } from './dto/create-myth-creature.dto';
import { UpdateMythCreatureDto } from './dto/update-myth-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MythCreaturesService {
  constructor(private prisma:PrismaService) {}
  create(createMythCreatureDto: CreateMythCreatureDto) {
    return 'This action adds a new mythCreature';
  }

  findAllGreek() {
    return this.prisma.creature.findMany({
      where: { origin: 'Greece'},
    });
  }

   /*findAllNordic() {
    return this.prisma.creature.findMany({
      where: { origin: 'Greece'},
    });*/
 
    findOne(id: number) {
      return this.prisma.creature.findUnique({
        where: {id},
    });

  }

  update(id: number, updateMythCreatureDto: UpdateMythCreatureDto) {
    return `This action updates a #${id} mythCreature`;
  }

  remove(id: number) {
    return this.prisma.creature.delete({
      where: {id},
  });
  }
}
