import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = 'http://localhost:8093/api/v1/orders';
  constructor(private http: HttpClient) {}

  placeOrder(userName: string, cartId: string):Observable<Order>{
    console.log(userName);
    
    return this.http.post<Order>(this.url + '/'+userName+'/'+cartId,null);
  }
}
