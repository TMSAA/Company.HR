import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:5217/api'; // 👈 base común de tu API

  constructor(private http: HttpClient) {}

  // --- Método GET genérico ---
  get(endpoint: string) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get(url);
  }

  // --- Método POST genérico ---
  post(endpoint: string, body: any) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post(url, body);
  }

  // --- Método PUT genérico ---
  put(endpoint: string, body: any) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.put(url, body);
  }

  // --- Método DELETE genérico ---
  delete(endpoint: string) {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.delete(url);
  }
}