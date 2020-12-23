import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../services/product.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) { }

  loadProducts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.loadProducts),
        mergeMap(() => this.productService.getAllProducts()
          .pipe(
            map(products => ProductActions.loadProductsSuccess({ products })),
            catchError(error => of(ProductActions.loadProductsFailure({ error })))
          )
        )
      );
  });
}
