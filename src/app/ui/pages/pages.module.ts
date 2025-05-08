import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { LoginComponent } from "./login/login.component";
import { ProductsComponent } from "./products/products.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { LoginUseCase } from "../../domain/login/usecases/login.usecase";
import { ProductUseCase } from "../../domain/products/usecases/product.usecase";
import { UserUseCase } from "../../domain/user/usecases/user.usecase";
import { ProductGateway } from "../../domain/products/gateways/product.gateway";
import { LoginGateway } from "../../domain/login/gateways/login.gateway";
import { UserGateway } from "../../domain/user/gateways/user.gateway";
import { ProductsService } from "../../infrastructure/driven-adapters/products/products.service";
import { LoginService } from "../../infrastructure/driven-adapters/login/login.service";
import { UserService } from "../../infrastructure/driven-adapters/user/user.service";
import { CurrencyFormatPipe } from "../pipes/currency-format.pipe";
import { LastFourDigitsPipe } from "../pipes/last-fourt-digits.pipe";

@NgModule({
  declarations: [LoginComponent, ProductsComponent, CurrencyFormatPipe, LastFourDigitsPipe],
  imports: [CommonModule, PagesRoutingModule, ReactiveFormsModule, IonicModule],
  exports: [CurrencyFormatPipe, LastFourDigitsPipe],
  providers: [
    LoginUseCase,
    {
      provide: LoginGateway,
      useClass: LoginService
    },
    ProductUseCase,
    {
      provide: ProductGateway,
      useClass: ProductsService
    },
    UserUseCase,
    {
      provide: UserGateway,
      useClass: UserService
    }
  ],
})
export class PagesModule {}