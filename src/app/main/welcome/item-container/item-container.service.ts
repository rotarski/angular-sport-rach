import { Injectable } from '@angular/core';


export interface ItemContainer{
  title:string;
  content: string;
  sortId?: number;
  id?:number;
}



@Injectable({
  providedIn: 'root'
})
export class ItemContainerService {


  constructor() { }
}
