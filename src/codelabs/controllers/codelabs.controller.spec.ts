import { Test, TestingModule } from '@nestjs/testing';
import { CodelabsController } from './codelabs.controller';

describe('Codelabs Controller', () => {
  let controller: CodelabsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodelabsController],
    }).compile();

    controller = module.get<CodelabsController>(CodelabsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
