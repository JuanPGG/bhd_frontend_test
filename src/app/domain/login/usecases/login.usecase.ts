import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Credentials, Token } from "../models/login.model";
import { LoginGateway } from "../gateways/login.gateway";

@Injectable({
  providedIn: 'root'
})
export class LoginUseCase {

  constructor(private loginGateway: LoginGateway) {}

  login(credentials: Credentials): Observable<Token> {
    return this.loginGateway.login(credentials);
  }
}