import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BoekServiceService {
  private _url = "http://localhost:8082/searchBook/";
  constructor(private http: HttpClient) { }


  searchBoeken(searchTerm: string){

    return this.http.get(this._url + searchTerm)
  }
}
