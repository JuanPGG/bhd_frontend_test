import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../../../domain/products/models/account.model';
import { Card } from '../../../domain/products/models/card.model';
import { ProductUseCase } from '../../../domain/products/usecases/product.usecase';
import { User } from '../../../domain/user/models/user.model';
import { UserUseCase } from '../../../domain/user/usecases/user.usecase';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], 
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  cards: Card[] = [];
  accounts: Account[] = [];
  user: User;

  constructor(
    private _productUseCase: ProductUseCase, 
    private _userUseCase: UserUseCase,
    private router: Router) { }

  ngOnInit() {
    this.getAccounts();
    this.getCards();
    this.getUser();
  }

  getAccounts(){
   this._productUseCase.getAccounts().subscribe((res) => this.accounts = res);
  }

  getCards(){
    this._productUseCase.getCards().subscribe((res) => this.cards = res);
  }

  getUser(){
    this._userUseCase.getUser().subscribe((res) => this.user = res);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
