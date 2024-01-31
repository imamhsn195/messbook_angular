import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diary } from './diary.model';

@Injectable({
    providedIn: 'root'
  })
export class DiaryService{
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/api';
  // api/diaries/create

  addMessBook(diary: Diary): Observable<Diary> {
    return this.http.post<Diary>(`${this.apiUrl}/diaries/create`, diary);
  }

  getMessBookById(id: String): Observable<Diary>{
    return this.http.get<Diary>(`${this.apiUrl}/diaries/${id}`);
  };
  
  getMessBooks(): Observable<Diary[]>{
    return this.http.get<Diary[]>(`${this.apiUrl}/diaries`);
  }

  UpdateMessBook(diary: Diary): Observable<Diary>{
    return this.http.put<Diary>(`${this.apiUrl}/diaries/${diary._id}`, diary);
  }

  deleteMessBook(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/diaries/${id}`);
  }
}