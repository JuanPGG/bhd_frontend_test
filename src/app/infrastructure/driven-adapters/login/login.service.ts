import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginGateway } from '../../../domain/login/gateways/login.gateway';
import { Credentials, Token } from '../../../domain/login/models/login.model';
import { LoginResponse } from './models/login-response.model';
import { loginResponseMapper } from './mappers/login-response.mapper';
import { environment } from '../../../../environments/environment';
import { loginResponseMock } from '../../mocks/login.mock';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements LoginGateway {

  constructor(private _http: HttpClient) { }
  
  login(credentials: Credentials): Observable<Token> {

    return of(loginResponseMock).pipe(
      map((res) => loginResponseMapper(res))
    );

    // return this._http.post<LoginResponse>(`${environment.baseEndpoint}/sign_in`, credentials).pipe(
    //   map((res) => loginResponseMapper(res))
    // );
  }
}
