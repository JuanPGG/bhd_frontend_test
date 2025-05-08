import { Observable } from "rxjs";

import { Card } from "../models/card.model";

export abstract class CardGateway {
  abstract getCards(): Observable<Card[]>;
}