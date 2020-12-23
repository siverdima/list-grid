import { Product } from '../models/Product';

import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as ProductActions from './product.actions';

export interface State {
  products: ProductState;
}

export interface ProductState {
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  products: [],
  error: ''
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: ''
    };
  }),
  on(ProductActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error
    };
  })
);
