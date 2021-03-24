import {Exemplaar} from "./Exemplaar"
export class Boek{
    titel: string;
    auteur: string;
    tags?: string;
    status?: string;
    aantal: number;
    isbn: string;
    exemplaar?: Exemplaar;
}