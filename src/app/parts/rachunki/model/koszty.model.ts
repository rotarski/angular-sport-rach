import { Podmiot } from "./podmiot.model";

export enum Koszt {
    kup = "UZYSKANIA_P",
    knkup = "NIESTANOWIACE_KUP"
  }


export class Koszty{
    podmiot?:Podmiot;
    dataZdarzenia: Date;
    nrDowoduKsiegowego?:string;
    opisZdarzenia:string;
    kwota:number;
    koszty: string;
    id?:number;
}