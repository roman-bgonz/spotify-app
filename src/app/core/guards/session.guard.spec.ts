import { TestBed } from '@angular/core/testing';

import { SessionGuard } from './session.guard';
import { RouterTestingModule } from '@angular/router/testing';

// Es el nombre de la prueba "Examen del session guard"
describe('Testing of session guard', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(SessionGuard);
  });

  // Primer pregunta de ese examen
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
