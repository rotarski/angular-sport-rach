

import { Adres } from './adres.model';
import { Organ } from './organ.model';
import { Rejestracja } from './rejestracja.model';


export class Klub{
    id?: number;
    nazwa: string;
    nip: number;
    regon: number;
    version?: number;
    adres: Adres;
    rejestracja?: Rejestracja;
    zarzad?: Organ;
    nadzor?: Organ;
}