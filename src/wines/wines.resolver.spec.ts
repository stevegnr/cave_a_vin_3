import { Test, TestingModule } from '@nestjs/testing';
import { WinesResolver } from './wines.resolver';
import { WinesService } from './wines.service';

describe('WinesResolver', () => {
  let resolver: WinesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinesResolver, WinesService],
    }).compile();

    resolver = module.get<WinesResolver>(WinesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
