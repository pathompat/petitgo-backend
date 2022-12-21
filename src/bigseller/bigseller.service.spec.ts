import { Test, TestingModule } from '@nestjs/testing';
import { BigsellerService } from './bigseller.service';

describe('BigsellerService', () => {
  let service: BigsellerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BigsellerService],
    }).compile();

    service = module.get<BigsellerService>(BigsellerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
