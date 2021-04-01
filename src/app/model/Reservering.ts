import {Exemplaar} from "./Exemplaar"

export class Reservering{
    id: string;
    exemplaar: Exemplaar;
    isbn: string;
    reserveringsDatum: string;
    user: string;
    titel: string;
}