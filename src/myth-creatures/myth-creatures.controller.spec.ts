import { Test, TestingModule } from '@nestjs/testing';
import { MythCreaturesController } from './myth-creatures.controller';
import { MythCreaturesService } from './myth-creatures.service';

describe('MythCreaturesController', () => {
  let controller: MythCreaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MythCreaturesController],
      providers: [MythCreaturesService],
    }).compile();

    controller = module.get<MythCreaturesController>(MythCreaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
