import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.apiUrl}/users`);
  }

  getByIdUser(){
    return this.http.get(`${this.apiUrl}/users/id`);
  }

  createUser(data: any){
    return this.http.post(`${this.apiUrl}/users`, data);
  }
  
  updateUser(data: any) {
    return this.http.put(`${this.apiUrl}/users`, data)
  }

  deleteUser(id:any){
    return this.http.delete(`${this.apiUrl}/users`, id)
  }
}
