import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemContainer } from './item-container/item-container.service';


const MAIN_URL = 'http://localhost:8080/main/';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient) { }

  getHttpItems(): Observable<ItemContainer[]> {
    return this.http.get<ItemContainer[]>(`${MAIN_URL}items`);
  }

  deleteHttpItem(id): Observable<void> {
    return this.http.delete<void>(`${MAIN_URL}items/${id}`);
  }

  savetHttpItems(item: ItemContainer): Observable<ItemContainer> {

    return this.http.post<ItemContainer>(`${MAIN_URL}items`, item);
  }
  getHttpItemsAll(): Observable<ItemContainer[]> {
    return this.http.get<ItemContainer[]>(`${MAIN_URL}items/all`);
  }


  getHttpMains(): Observable<ItemContainer[]> {
    return this.http.get<ItemContainer[]>(`${MAIN_URL}mains`);
  }

  deleteHttpMain(id): Observable<void> {
    return this.http.delete<void>(`${MAIN_URL}mains/${id}`);
  }

  savetHttpMains(item: ItemContainer): Observable<ItemContainer> {

    return this.http.post<ItemContainer>(`${MAIN_URL}mains`, item);
  }
  getHttpMainsAll(): Observable<ItemContainer[]> {
    return this.http.get<ItemContainer[]>(`${MAIN_URL}mains/all`);
  }

}
