import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { ProductGateway } from "../../../domain/products/gateways/product.gateway";
import { Account } from "../../../domain/products/models/account.model";
import { Card } from "../../../domain/products/models/card.model";
import { responseAccountsMock } from "../../mocks/accounts.mock";
import { responseCardsMock } from "../../mocks/cards.mock";
import { environment } from "../../../../../src/environments/environment";
import { Accounts } from "./models/accounts.model";
import { CreditCards } from "./models/cards.model";
import { cardsMapper } from "./mappers/cards.mapper";
import { accountsMapper } from "./mappers/accounts.mapper";

@Injectable({
  providedIn: "root",
})
export class ProductsService implements ProductGateway {
  constructor(private _http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return of(responseAccountsMock).pipe(map((res) => accountsMapper(res)));

    // return this._http.get<Accounts>(`${environment.baseEndpoint}/products/accounts`).pipe(
    //   map((res) => accountsMapper(res))
    // );
  }
  getCards(): Observable<Card[]> {
    return of(responseCardsMock).pipe(map((res) => cardsMapper(res)));

    // return this._http.get<CreditCards>(`${environment.baseEndpoint}/products/credit_cards`).pipe(
    //   map((res) => cardsMapper(res))
    // );
  }
}
