import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/model/carts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:8092/api/v1/carts';

  createCart(): Observable<Cart> {
    return this.http.get<Cart>(this.url);
  }
  addToCart(cartId: string, productId: number): Observable<Cart> {
    console.log(this.url + '/' + cartId + '/' + productId);

    return this.http.put<Cart>(this.url + '/' + cartId + '/' + productId, null);
  }

  getCart(id: string): Observable<Cart> {
    return this.http.get<Cart>(this.url + '/' + id);
  }

  clearCart(id: string) {
    return this.http.delete(this.url + '/clear/' + id);
  }

  removeProduct(cartId: string, id: number): Observable<Cart> {
    return this.http.put<Cart>(this.url + '/remove/'+cartId+'/'+id,null);
  }
}
