import { HttpClient, HttpHeaders, HttpParameterCodec } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenStorageService } from '../../user/authentication/service/token-storage.service';
import { User } from '../../user/model/user.model';
import { Klub } from '../model/klub.model';

const KLUB_URL = 'http://localhost:8080/user/klub';

@Injectable({
  providedIn: 'root'
})
export class KlubService{

  klub: Klub;
  constructor(private http:HttpClient, private tokenStorage: TokenStorageService) { }


  getHttpKlub(id:number): Observable<Klub>{
    return this.http.get<Klub>(`${KLUB_URL}/${id}`).pipe(
      tap(klub => {
        this.klub = klub ? klub: null;
      })
    );
  }

  saveHttpKlub(klub: Klub){
    return this.http.post<Klub>(KLUB_URL, klub).pipe(
      tap(klub =>{
        this.klub = klub;
        let user:User = this.tokenStorage.getUser();
        user.klubId = klub.id;
        this.tokenStorage.saveUser(user);
      })
    );
  }


  updateHttpKlub(klubUpdeted: Klub){
    let klub = {...this.klub, ...klubUpdeted};
    return this.http.put<Klub>(KLUB_URL, klub).pipe(
      tap(klub =>{
        this.klub = klub;
      })
    );
  }

  deleteHttpKlub(id:number){
    return this.http.delete(`${KLUB_URL}/${id}`).pipe(
      tap(klub =>{
        let user:User = this.tokenStorage.getUser();
        user.klubId = null;
        this.tokenStorage.saveUser(user);
        this.klub = null;
      })
    );
  }

  deleteHttpCzlonek(id:number){
    return this.http.delete(`${KLUB_URL}/${this.klub.id}/czlonek/${id}`);
  }

}
