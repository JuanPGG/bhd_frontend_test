import { Observable } from "rxjs";

import { User } from "../models/user.model";

export abstract class UserGateway {
  abstract getUser(): Observable<User>;
}