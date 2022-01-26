import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [LoginPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Primer enunciado que debe asegurar los siguiente
  // TODO: Debe de asegurarse que el formulario sea inválido cuando ingrese datos erroneos
  it('😠🍎  Should return invalid form', () => {
    // TODO: Patrón AAA (Arrange, act, assert)
    // TODO Arrange (Declare values to use)
    const mockCreds = {
      email: '0x0x0x0',
      password: '1234444242424424424424',
    };
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');

    // TODO: Act
    emailForm?.setValue(mockCreds.email);
    passwordForm?.setValue(mockCreds.password);

    // TODO: Assert
    expect(component.formLogin.invalid).toBeTrue();
  });

  it('🤖✈  Should return valid form', () => {
    // TODO Arrange (Declare values to use)
    const mockCreds = {
      email: 'test@test.com',
      password: '12345678',
    };
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');

    // TODO: Act
    emailForm?.setValue(mockCreds.email);
    passwordForm?.setValue(mockCreds.password);

    // TODO: Assert
    expect(component.formLogin.valid).toBeTrue();
  });

  it('🤝 The button should have in it the word Iniciar Sesión', () => {
    const elRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elRef.nativeElement.innerText;
    expect(getInnerText).toEqual('Iniciar sesión');
  });
});
