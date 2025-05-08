import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Account } from "../models/account.model";
import { Card } from "../models/card.model";
import { ProductGateway } from "../gateways/product.gateway";

@Injectable({
  providedIn: 'root'
})
export class ProductUseCase {

  constructor(private productGateway: ProductGateway) {}

  getAccounts(): Observable<Account[]> {
    return this.productGateway.getAccounts();
  }

  getCards(): Observable<Card[]> {
    return this.productGateway.getCards();
  }
}