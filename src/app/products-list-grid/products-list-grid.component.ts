import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products-list-grid',
  templateUrl: './products-list-grid.component.html',
  styleUrls: ['./products-list-grid.component.scss'],
})
export class ProductsListGridComponent implements OnInit {
  @Input() public products: Product[];
  @Output() public productClicked = new EventEmitter<Product>();

  public isGrid = false;

  public constructor() {}

  public ngOnInit(): void {}

  public onTitleClicked(product: Product): void {
    this.productClicked.emit(product);
  }
}
