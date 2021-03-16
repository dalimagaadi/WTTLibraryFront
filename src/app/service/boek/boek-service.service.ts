import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Boek } from 'src/app/model/Boek';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoekServiceService {
  private _url = "http://localhost:8082/searchBook/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }


  searchBoeken(searchTerm: string){

    return this.http.get(this._url + searchTerm)
  }

  addBook(boek:Boek){
    return this.http.post("http://localhost:8082/addBoek",boek, this.httpOptions);
  }




}
