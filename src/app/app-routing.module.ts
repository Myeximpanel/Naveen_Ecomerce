import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
// import { ProductFirstComponent } from './home/product-category/product-first/product-first.component';
import { DiscriptionComponent } from './product-discription/discription/discription.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const routes: Routes = [
  {
    path: "", component: SharedComponent, children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "disription", component: DiscriptionComponent },
      { path: "add-cart", component: AddToCartComponent },
      { path: "login", component: LoginPageComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





