import { Test, TestingModule } from '@nestjs/testing';
import { MythCreaturesService } from './myth-creatures.service';

describe('MythCreaturesService', () => {
  let service: MythCreaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MythCreaturesService],
    }).compile();

    service = module.get<MythCreaturesService>(MythCreaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
