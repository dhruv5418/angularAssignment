import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:8091/api/v1/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.url + '/id/' + id);
  }

  updateProduct(product: Product): Observable<Product> {  
    return this.http.put<Product>(this.url, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
