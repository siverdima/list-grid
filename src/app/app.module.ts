import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsListGridComponent } from './products-list-grid/products-list-grid.component';
import { ProductService } from './services/product.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './state/product.reducer';
import { ProductEffects } from './state/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
