import { Test, TestingModule } from '@nestjs/testing';
import { ExaminationsController } from './examinations.controller';

describe('ExaminationsController', () => {
  let controller: ExaminationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExaminationsController],
    }).compile();

    controller = module.get<ExaminationsController>(ExaminationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
