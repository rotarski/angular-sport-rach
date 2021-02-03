import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { KlubService } from '../../klub/service/klub.service';
import { Podmiot } from '../model/podmiot.model';

const PODMIOT_URL = 'http://localhost:8080/user/klub';

@Injectable()
export class PodmiotService{
  podmiotList:Podmiot[];
  // emitPodmiotList:Subject<Podmiot[]> = new BehaviorSubject(null);
  // emitPodmiot:Subject<Podmiot> = new BehaviorSubject(null);
  podmiot:Podmiot;

  constructor(private http: HttpClient, private klubService: KlubService) { }
 


  getHttpPodmioty(): Observable<Podmiot[]>{
    let id = this.klubService.klub.id;
    return this.http.get<Podmiot[]>(`${PODMIOT_URL}/${id}/podmioty`).pipe(tap((podmioty) => {
      this.podmiotList = podmioty;
    //  this.emitPodmiotList.next(this.podmiotList);
    }));
  }

  saveHttpPodmiot(podmiot:Podmiot): Observable<Podmiot>{
    let id = this.klubService.klub.id;
    return this.http.post<Podmiot>(`${PODMIOT_URL}/${id}/podmioty`,podmiot).pipe(tap((podmiot) => {
      this.podmiot = podmiot;
    }));
  }

  savePodmiotAndGetPodmioty(podmiot:Podmiot){
   return this.saveHttpPodmiot(podmiot).pipe(
      switchMap(p => {
        return this.getHttpPodmioty();
      })     
    );
  }

  emitAll(){
    // this.emitPodmiot.next(this.podmiot);
    // this.emitPodmiotList.next(this.podmiotList);
  }
}
