import { Product } from '../models/Product';

import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Product] Load'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);
