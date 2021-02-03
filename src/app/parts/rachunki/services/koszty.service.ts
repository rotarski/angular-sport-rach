import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KlubService } from '../../klub/service/klub.service';
import { Koszty } from '../model/koszty.model';


const KOSZTY_URL = 'http://localhost:8080/user/klub';

@Injectable()
export class KosztyService {

  constructor(private http:HttpClient, private klubService: KlubService) { }


  getHttpKoszty(): Observable<Koszty[]>{
    let id = this.klubService.klub.id;
    return this.http.get<Koszty[]>(`${KOSZTY_URL}/${id}/koszty`);
  }

  saveHttpKoszty(koszty: Koszty):Observable<{}>{
    let id = this.klubService.klub.id;
    return this.http.post<Response>(`${KOSZTY_URL}/${id}/koszty`, koszty, {observe: 'response'})
  }

  deleteHttpKoszt(id: number): Observable<{}>{
    let klubId = this.klubService.klub.id;
    return this.http.delete<Response>(`${KOSZTY_URL}/${klubId}/koszty/${id}`, {observe: 'response'});
  }
}
