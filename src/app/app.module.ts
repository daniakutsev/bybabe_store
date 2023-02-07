import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { BasketComponent } from './components/basket/basket.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EditPageComponent } from './components/product-actives/edit-page/edit-page.component';
import { CreatePageComponent } from './components/product-actives/create-page/create-page.component';
import { LoginPageComponent } from './user/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasketComponent,
    MainComponent,
    ProductsComponent,
    ProductDetailsComponent,
    EditPageComponent,
    CreatePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
