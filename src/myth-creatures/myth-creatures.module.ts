import { Module } from '@nestjs/common';
import { MythCreaturesService } from './myth-creatures.service';
import { MythCreaturesController } from './myth-creatures.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MythCreaturesController],
  providers: [MythCreaturesService],
  imports: [PrismaModule],
})
export class MythCreaturesModule {}
