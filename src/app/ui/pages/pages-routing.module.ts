import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { ProductsComponent } from "./products/products.component";
import { PrivateRoutesGuard } from "../guards/private-routes.guard";
import { PublicRoutesGuard } from "../guards/public-routes.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [PublicRoutesGuard]
  },
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [PrivateRoutesGuard]
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}