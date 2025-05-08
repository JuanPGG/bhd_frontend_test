import { Observable } from "rxjs";

import { Token, Credentials } from "../models/login.model";

export abstract class LoginGateway {
  abstract login(credentials: Credentials): Observable<Token>;
}