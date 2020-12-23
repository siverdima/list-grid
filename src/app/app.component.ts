import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './models/Product';
import { State, getProducts, getError } from './state/product.reducer';
import * as ProductActions from '../app/state/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'grid-list';

  errorMessage$: Observable<any>;

  products$: Observable<Product[]>;

  public constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.products$ = this.store.select(getProducts);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(ProductActions.loadProducts());
  }

  public onProductClicked(product: Product): void {
    alert(`Product with Id: ${product.productId} clicked.`);
  }
}
