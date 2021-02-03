import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KlubService } from '../../klub/service/klub.service';
import { Przychody } from '../model/przychody.model';

const PRZYCHODY_URL = 'http://localhost:8080/user/klub';

@Injectable()
export class PrzychodyService {

  constructor(private http:HttpClient, private klubService: KlubService) { }


  getHttpPrzychody(): Observable<Przychody[]>{
    let id = this.klubService.klub.id;
    return this.http.get<Przychody[]>(`${PRZYCHODY_URL}/${id}/przychody`);
  }

  saveHttpPrzychody(przychody: Przychody):Observable<{}>{
    let id = this.klubService.klub.id;
    return this.http.post<Response>(`${PRZYCHODY_URL}/${id}/przychody`, przychody, {observe: 'response'})
  }

  deleteHttpPrzychody(id: number): Observable<{}>{
    let klubId = this.klubService.klub.id;
    return this.http.delete<Response>(`${PRZYCHODY_URL}/${klubId}/przychody/${id}`, {observe: 'response'});
  }
}
