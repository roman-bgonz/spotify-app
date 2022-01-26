import { ImgBrokenDirective } from './img-broken.directive';
import { ElementRef } from '@angular/core';

// La prueba de ImgBroken es la siguiente
describe('ImgBrokenDirective', () => {
  // Debería de instanciarse correctamente
  it('should create an instance', () => {
    const mockEl = new ElementRef('');
    const directive = new ImgBrokenDirective(mockEl);
    expect(directive).toBeTruthy();
  });
});
