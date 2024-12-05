import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Hamburger } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HamburguerService {
  private readonly API_URL: string = 'http://localhost:5038/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/categories`);
  }

  getHamburgers(): Observable<Hamburger[]> {
    return this.http.get<Hamburger[]>(`${this.API_URL}/products`);
  }

  getHamburgersByCategory(categoryId: string): Observable<Hamburger[]> {
    return this.http.get<Hamburger[]>(`${this.API_URL}/categories/${categoryId}/products`);
  }

  getHamburgerById(id: string): Observable<Hamburger> {
    return this.http.get<Hamburger>(`${this.API_URL}/products/${id}`);
  }
}
