import { TestBed, async, inject } from '@angular/core/testing';

import { PrivateRoutesGuard } from './private-routes.guard';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateRoutesGuard]
    });
  });

  it('should ...', inject([PrivateRoutesGuard], (guard: PrivateRoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
