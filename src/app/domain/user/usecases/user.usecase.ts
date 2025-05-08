import { Observable } from "rxjs";

import { UserGateway } from "../gateways/user.gateway";
import { User } from "../models/user.model";

export class UserUseCase {

  constructor(private userGateway: UserGateway) {}

  getUser(): Observable<User> {
    return this.userGateway.getUser();
  }
}