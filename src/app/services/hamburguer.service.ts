import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Hamburger } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HamburguerService {
  private readonly API_URL: string = '/api'

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}/category`);
  }

  getHamburgers(): Observable<Hamburger[]> {
    return this.http.get<Hamburger[]>(`${this.API_URL}/hamburguers`);
  }

  getHamburgersByCategory(categoryId: string): Observable<Hamburger[]> {
    return this.http.get<Hamburger[]>(`${this.API_URL}/hamburguers?categoryId=${categoryId}`);
  }

  getHamburgerById(id: string): Observable<Hamburger> {
    return this.http.get<Hamburger>(`${this.API_URL}/hamburguers/${id}`);
  }
}
