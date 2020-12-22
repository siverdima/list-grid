import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  public getAllProducts(): Observable<Product[]> {
    return new Observable<any[]>((observer) => {
      this.http.get<any[]>('/api/products').subscribe(
        (data: any) => {
          observer.next(data);
          observer.complete();
        },
        (err: any) => {
          this.handleError(err);
          observer.error(err);
          observer.complete();
        }
      );
    });
  }
  public handleError(err: any): void {
    console.error(err);
  }
}
