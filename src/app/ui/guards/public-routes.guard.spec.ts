import { TestBed, async, inject } from '@angular/core/testing';

import { PublicRoutesGuard } from './public-routes.guard';

describe('PublicRoutsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicRoutesGuard]
    });
  });

  it('should ...', inject([PublicRoutesGuard], (guard: PublicRoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
