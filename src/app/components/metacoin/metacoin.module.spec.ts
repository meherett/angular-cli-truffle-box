import { MetacoinModule } from './metacoin.module';

describe('MetacoinModule', () => {
  let metacoinModule: MetacoinModule;

  beforeEach(() => {
    metacoinModule = new MetacoinModule();
  });

  it('should create an instance', () => {
    expect(metacoinModule).toBeTruthy();
  });
});
