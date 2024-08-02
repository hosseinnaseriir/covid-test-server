import { Test, TestingModule } from '@nestjs/testing';
import { ExaminationsService } from './examinations.service';

describe('ExaminationsService', () => {
  let service: ExaminationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExaminationsService],
    }).compile();

    service = module.get<ExaminationsService>(ExaminationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
