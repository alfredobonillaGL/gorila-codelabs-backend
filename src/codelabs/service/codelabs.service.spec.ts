import { Test, TestingModule } from '@nestjs/testing';
import { CodelabsService } from './codelabs.service';

describe('Codelabs.ServiceService', () => {
  let service: CodelabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodelabsService],
    }).compile();

    service = module.get<CodelabsService>(CodelabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
