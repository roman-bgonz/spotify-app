import { ImgBrokenDirective } from './img-broken.directive';
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { timeout } from 'rxjs/operators';

// TODO: Crear componente de prueba
@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock" >',
})
class TestComponent {
  public srcMock: any = null;
}

// La prueba de ImgBroken es la siguiente
describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ImgBrokenDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Debería de instanciarse correctamente
  it('should create an instance', () => {
    const mockEl = new ElementRef('');
    const directive = new ImgBrokenDirective(mockEl);
    expect(directive).toBeTruthy();
  });

  it('🧧 TestComponent should be instantiated successfully', () => {
    expect(component).toBeTruthy();
  });

  it('🐕 Directuve should chnage the image', (done: DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(
      By.css('.testing-directive')
    ).nativeElement;
    const beforeImgSrc = beforeImgElement.src; // Tenemos la url antes de ser cambiada por la directiva
    component.srcMock = undefined;

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(
        By.css('.testing-directive')
      ).nativeElement;
      const afterImgSrc = afterImgElement.src; // Tenemos la url despupes de ser cambiada por la directiva

      expect(afterImgSrc).toMatch(/\bangular.png\b/);
      done();
    }, 3000);
  });
});
