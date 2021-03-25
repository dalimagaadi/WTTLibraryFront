import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boek } from 'src/app/model/Boek';
import { HttpHeaders } from '@angular/common/http';
import { Exemplaar } from 'src/app/model/Exemplaar';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  searchBoeken(searchTerm: string) {
    return this.http.get(this._url + searchTerm)
  }

  searchAllBoeken() {
    return this.http.get("http://localhost:8082/searchAllBook")
  }

  addBook(boek: Boek) {
    return this.http.post("http://localhost:8082/addBoek", boek, this.httpOptions);
  }

  addExemplaar(isbn: string, amount: number) {
    let exemplaar = new Exemplaar()
    exemplaar.wtid = isbn + "." + String(amount + 1)
    exemplaar.status = "Beschikbaar"
    return this.http.post(`http://localhost:8082/addExemplaar/${isbn}`, exemplaar, this.httpOptions)
  }

  getExemplaarAmount(isbn: string) {
    return this.http.get(`http://localhost:8082/searchExemplaarAmount/${isbn}`);
  }

  getBook(isbn: string) {
    return this.http.get<Boek>(`http://localhost:8082/getBoek/${isbn}`)
  }

  updateBook(isbn: string, boek) {
    return this.http.put(
      `http://localhost:8082/bewerkBoek/${isbn}`, boek)
  }
}
