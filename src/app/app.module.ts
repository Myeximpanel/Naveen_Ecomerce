import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedComponent } from './shared/shared.component';
import { SideBarComponent } from './components/side-bar-cotegory/side-bar/side-bar.component';
import { ProductFirstComponent } from './home/product-category/product-first/product-first.component';
import { AddFirstComponent } from './adds/add-first/add-first.component';
import { DiscriptionComponent } from './product-discription/discription/discription.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { CartComponent } from './cart/cart.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CategoryNameComponent } from './home/product-category/category-name/category-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SharedComponent,
    SideBarComponent,
    ProductFirstComponent,
    AddFirstComponent,
    DiscriptionComponent,
    SimilarProductsComponent,
    SideFilterComponent,
    CartComponent,
    LoginPageComponent,
    FooterComponent,
    HomeComponent,
    AddToCartComponent,
    CategoryNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
