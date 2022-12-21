import { Test, TestingModule } from '@nestjs/testing';
import { BigsellerController } from './bigseller.controller';
import { BigsellerService } from './bigseller.service';

describe('BigsellerController', () => {
  let controller: BigsellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BigsellerController],
      providers: [BigsellerService],
    }).compile();

    controller = module.get<BigsellerController>(BigsellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
