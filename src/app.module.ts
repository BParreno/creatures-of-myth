import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MythCreaturesModule } from './myth-creatures/myth-creatures.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MythCreaturesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
