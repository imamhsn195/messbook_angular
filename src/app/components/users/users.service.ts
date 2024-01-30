import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
    providedIn: 'root'
  })
export class UserService{
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/api';

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/create`, user);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  };
  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  UpdateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/users`, user);
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}