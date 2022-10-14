import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = "http://localhost:8000/api/product/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL, JSON.stringify(Product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, Product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiURL + id, JSON.stringify(Product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Product>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
