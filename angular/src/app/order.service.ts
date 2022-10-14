import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Order } from './order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiURL = "http://localhost:8000/api/order/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(order): Observable<Order> {
    return this.httpClient.post<Order>(this.apiURL, JSON.stringify(order), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Order> {
    return this.httpClient.get<Order>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, Order): Observable<Order> {
    return this.httpClient.put<Order>(this.apiURL + id, JSON.stringify(Order), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Order>(this.apiURL + id, this.httpOptions)
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
