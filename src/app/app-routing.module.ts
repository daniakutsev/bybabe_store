import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {BasketComponent} from "./components/basket/basket.component";
import {EditPageComponent} from "./components/product-actives/edit-page/edit-page.component";
import {CreatePageComponent} from "./components/product-actives/create-page/create-page.component";
import {LoginPageComponent} from "./user/login-page/login-page.component";
import {AuthGuard} from "./user/services/auth.guard";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'product/edit/:id', component: EditPageComponent, canActivate: [AuthGuard]},
  {path: 'product/create', component: CreatePageComponent, canActivate: [AuthGuard]},
  {path: 'basket', component: BasketComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
