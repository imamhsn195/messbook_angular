import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessMember } from './mess-member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessMemberService {
  constructor(private http: HttpClient) {}
  private apiUrl = "api";

  addMember(messMember: MessMember): Observable<MessMember>{
    return  this.http.post<MessMember>(`${this.apiUrl}/mess-members/create`,messMember);
  }
  getMessMemberById(id: number): Observable<MessMember>{
    return this.http.get<MessMember>(`${this.apiUrl}/mess-members/${id}`);
  };
  
  getMessMembers(): Observable<MessMember[]>{
    return this.http.get<MessMember[]>(`${this.apiUrl}/mess-members`);
  }

  UpdateMessMember(messMember: MessMember): Observable<MessMember>{
    return this.http.put<MessMember>(`${this.apiUrl}/mess-members`, messMember);
  }

  deleteMessMember(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/mess-members/${id}`);
  }
}
