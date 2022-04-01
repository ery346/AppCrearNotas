import { TestBed } from '@angular/core/testing';

import { NotasGuard } from './notas.guard';

describe('NotasGuard', () => {
  let guard: NotasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
