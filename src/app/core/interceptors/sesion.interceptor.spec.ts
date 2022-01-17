import { TestBed } from '@angular/core/testing';

import { SesionInterceptor } from './sesion.interceptor';

describe('SesionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SesionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SesionInterceptor = TestBed.inject(SesionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
