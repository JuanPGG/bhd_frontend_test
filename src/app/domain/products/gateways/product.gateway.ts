import { Observable } from "rxjs";

import { Account } from "../models/account.model";
import { Card } from "../models/card.model";

export abstract class ProductGateway {
  abstract getAccounts(): Observable<Account[]>;
  abstract getCards(): Observable<Card[]>;
}
