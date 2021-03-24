import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  addExemplaar(isbn: string){
     let exemplaar = new Exemplaar()
    // this.http.get(`http://localhost:8082/searchExemplaarAmount/${isbn}`).subscribe((int=>{exemplaar.WTid = isbn + "." + String(int)}))
    exemplaar.WTid = "1"
    exemplaar.status = "Beschikbaar"
   console.log(exemplaar)
     return this.http.post("http://localhost:8082/addExemplaar/" + isbn, exemplaar, this.httpOptions)
  // }
  }

//  opslaanExemplaarAmount(isbn: string):Observable<Int>{
//   return 
//  }


}
