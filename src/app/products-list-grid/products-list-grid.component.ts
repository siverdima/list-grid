import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products-list-grid',
  templateUrl: './products-list-grid.component.html',
  styleUrls: ['./products-list-grid.component.scss'],
})
export class ProductsListGridComponent implements OnInit {
  @Input() public products: Product[];

  public isGrid = false;

  public constructor() {}

  public ngOnInit(): void {}

  public timeSince(date: Date): string {
    const now = new Date();
    const seconds = Math.floor(
      (now.getMilliseconds() - new Date(date).getMilliseconds()) / 1000
    );

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }
}
