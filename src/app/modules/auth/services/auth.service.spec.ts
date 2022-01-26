import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    // Creamos un objeto espía que va a a espiar el HttpClient y su método post
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: Prueba del sendCredentials
  it('Should return an object with data and tokenSession', (done: DoneFn) => {
    // TODO: Arrange
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: '',
    };

    // Se le dice al espía que cuando usen el POST retorne un valor (lo que el api response)
    httpClientSpy.post.and.returnValue(of(mockResponse));

    // TODO Act
    service
      .sendCredentials(user.email, user.password)
      .subscribe((respuestaApi) => {
        const props = Object.keys(respuestaApi);
        expect(props).toContain('data');
        expect(props).toContain('tokenSession');
        done();
      });
  });
});
