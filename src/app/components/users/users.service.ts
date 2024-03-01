import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
    providedIn: 'root'
  })
export class UserService{
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;  

  addUser(user: FormData ): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/create`, user);
  }

  getUserById(id: String): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  };
  
  getUsers(page: number, size: number, search: string): Observable<{users: User[], totalCount: number, totalPages: number, currentPage: number}>{
    const queryParams = `?page=${page}&size=${size}&search=${search}`;
    return this.http.get<{users: User[], totalCount: number, totalPages: number, currentPage: number}>(`${this.apiUrl}/users${queryParams}`);
  }

  UpdateUser(user: FormData): Observable<User>{
    const userId = user.get('_id');
    user.delete('_id');
    console.log("userUpdated" + user);
    return this.http.put<User>(`${this.apiUrl}/users/${userId}`, user);
  }

  deleteUser(_id: String): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/users/${_id}`);
  }
}