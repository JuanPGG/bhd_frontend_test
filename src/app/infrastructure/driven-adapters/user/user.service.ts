import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserGateway } from '../../../domain/user/gateways/user.gateway';
import { User } from '../../../domain/user/models/user.model';
import { responseUserMock } from '../../mocks/user.mock';
import { userMapper } from './mappers/user.mapper';
import { UserResponse } from './models/user.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserGateway {

  constructor(private _http: HttpClient) { }

  getUser(): Observable<User> {
    return of(responseUserMock).pipe(map((res) => userMapper(res)));
    
    // return this._http.get<UserResponse>(`${environment.baseEndpoint}/na`).pipe(
    //   map((res) => userMapper(res))
    // );
  }
}
