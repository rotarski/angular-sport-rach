import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getHttpKlub(email:string): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/user/${email}`);
  }

  saveHttpKlub(user: User){
    return this.http.post<User>(`http://localhost:8080/user/`, user);
  }
}
