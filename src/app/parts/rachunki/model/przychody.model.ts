import { Podmiot } from "./podmiot.model";

export enum Przychod{
   nieodplatne = "NIEODPLATNE_PP",
   odplatne = "ODPLATNE_PP", 
   pozostale = "POZOSTALE"
}

export class Przychody{
    podmiot?:Podmiot;
    dataZdarzenia: Date;
    nrDowoduKsiegowego?:string;
    opisZdarzenia:string;
    kwota:number;
    przychody: string;
    id?:number;
}