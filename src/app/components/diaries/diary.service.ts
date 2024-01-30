import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diary } from './diary.model';

@Injectable({
    providedIn: 'root'
  })
export class DiaryService{
  constructor(private http: HttpClient) {}
  private apiUrl = 'api';

  addMessBook(messBook: Diary): Observable<Diary> {
    return this.http.post<Diary>(`${this.apiUrl}/mess-books`, messBook);
  }

  getMessBookById(id: number): Observable<Diary>{
    return this.http.get<Diary>(`${this.apiUrl}/mess-books/${id}`);
  };
  
  getMessBooks(): Observable<Diary[]>{
    return this.http.get<Diary[]>(`${this.apiUrl}/mess-books`);
  }

  UpdateMessBook(messBook: Diary): Observable<Diary>{
    return this.http.put<Diary>(`${this.apiUrl}/mess-books`, messBook);
  }

  deleteMessBook(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/mess-books/${id}`);
  }
}