import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../types';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly API_URL: string = 'http://localhost:5038/api';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.API_URL}/orders`);
  }
  
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.API_URL}/orders`, order);
  }
}
