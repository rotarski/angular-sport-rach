import { Czlonek } from './czlonek.model';

export class Organ{
    id: number;
    nazwa: string;
    organTyp?: string;
    sklad?: Czlonek[];
}