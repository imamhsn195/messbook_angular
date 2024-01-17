import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessBook } from './mess-book-model';

@Injectable({
    providedIn: 'root'
  })
export class MessBookService{
  constructor(private http: HttpClient) {}
  private apiUrl = 'api';

  addMessBook(messBook: MessBook): Observable<MessBook> {
    return this.http.post<MessBook>(`${this.apiUrl}/mess-books`, messBook);
  }

  getMessBookById(id: number): Observable<MessBook>{
    return this.http.get<MessBook>(`${this.apiUrl}/mess-books/${id}`);
  };
  
  getMessBooks(): Observable<MessBook[]>{
    return this.http.get<MessBook[]>(`${this.apiUrl}/mess-books`);
  }

  UpdateMessBook(messBook: MessBook): Observable<MessBook>{
    return this.http.put<MessBook>(`${this.apiUrl}/mess-books`, messBook);
  }

  deleteMessBook(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/mess-books/${id}`);
  }
}