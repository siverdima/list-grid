import { Component, Input, OnInit } from '@angular/core';
import { Product } from './models/Product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'grid-list';

  public products: Product[] = [];

  public constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
