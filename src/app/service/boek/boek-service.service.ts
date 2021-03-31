import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boek } from 'src/app/model/Boek';
import { User } from 'src/app/model/User';
import { HttpHeaders } from '@angular/common/http';
import { Exemplaar } from 'src/app/model/Exemplaar';

import {AdminBepalenService} from '../admin-service/admin-bepalen.service'
@Injectable({
  providedIn: 'root'
})

export class BoekServiceService {
  private _url = "http://localhost:8082/searchBook/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,public adminBepalenService: AdminBepalenService) { }

  
  maakReservering(isbn){
    let _userEmail = this.adminBepalenService.getUserEmail();
    //User ophalen uit de session storage
    return this.http.post(`http://localhost:8082/reserveer/${isbn}/${_userEmail}`,{}, this.httpOptions);
  }
  
  searchBoeken(searchTerm: string) {
    return this.http.get(this._url + searchTerm)
  }

  searchAllBoeken() {
    return this.http.get("http://localhost:8082/searchAllBook")
  }

  addBook(boek: Boek) {
    return this.http.post("http://localhost:8082/addBoek", boek, this.httpOptions);
  }

  addExemplaar(isbn: string, amount: number, toAdd?: number ) {
    let exemplaren = [];
    if(toAdd){
      for(let i =0; i < toAdd; i++){
        console.log(i);
        let exemplaar = new Exemplaar()
        exemplaar.wtid = isbn + "." + String(i+1);
        exemplaar.status = "Beschikbaar"
        exemplaren.push(exemplaar)
      }
    }else{
      let exemplaar = new Exemplaar()
      exemplaar.wtid = isbn + "." + String(amount + 1)
      exemplaar.status = "Beschikbaar"
      exemplaren.push(exemplaar);
    }

    return this.http.post(`http://localhost:8082/addExemplaar/${isbn}`, exemplaren, this.httpOptions)
  }

  getExemplaarAmount(isbn: string) {
    return this.http.get(`http://localhost:8082/searchExemplaarAmount/${isbn}`);
  }

  getsearchBoekAantal(isbn: string) {
    return this.http.get(`http://localhost:8082/searchBoekAantal/${isbn}`);
  }
  
  getBook(isbn: string) {
    return this.http.get<Boek>(`http://localhost:8082/getBoek/${isbn}`)
  }

  updateBook(isbn: string, boek) {
    return this.http.put(
      `http://localhost:8082/bewerkBoek/${isbn}`, boek)
  }
}
