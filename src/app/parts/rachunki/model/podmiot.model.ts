import { Adres } from "../../klub/model/adres.model";

export class Podmiot{
    id?:number;
    nazwa: string ='';
    nip?: number;
    adres: Adres;

    constructor(){}
}