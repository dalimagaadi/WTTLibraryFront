import { Component, OnInit } from '@angular/core';
import {Boek} from "../model/Boek";
import {BoekServiceService} from '../service/boek/boek-service.service'
import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';
import {User} from "../model/User";


@Component({
  selector: 'app-boekenzoeken',
  templateUrl: './boekenzoeken.component.html',
  styleUrls: ['./boekenzoeken.component.css']
})
export class BoekenzoekenComponent implements OnInit {
  zoekTerm: string; 
  isUserAdmin: boolean = false;
  gevondenBoeken: Boek[] = [];
  gevondenAllBoeken: Boek[] = [];
  constructor(private _boekService: BoekServiceService, public adminBepalenService: AdminBepalenService) { }
  zoekTermAanwezig: boolean = false;

  
 

  ngOnInit() {
    this.searchAllBoeken();
    this.zoekChecker()
    this.adminBepalenService.currentUserObservable.subscribe((_currentUser: User)=>{
      this.isUserAdmin = this.adminBepalenService.isUserAdmin(_currentUser);
})

  }
  testing(event){
  }
  searchBoeken(){
    this._boekService.searchBoeken(this.zoekTerm).subscribe((boeken: Boek[])=>{
      this.gevondenBoeken = boeken;
      if (this.gevondenBoeken.length > 0){
        this.zoekTermAanwezig = true;
      }
      else{
        this.zoekTermAanwezig = false;
      }
    })
  }

  searchAllBoeken(){
    this._boekService.searchAllBoeken().subscribe((allboeken: Boek[])=>{
      this.gevondenAllBoeken = allboeken;
    })
  }

  zoekChecker(){
    if (this.gevondenBoeken.length > 0){
      this.zoekTermAanwezig = true;
    }
    else{
      this.zoekTermAanwezig = false;
    }
    }
  

   exemplaartoevoegen(isbn){
    this._boekService.getExemplaarAmount(isbn).subscribe((amount: number)=>{
      this._boekService.addExemplaar(isbn, amount).subscribe((res)=>{  console.log(res)  
      })
    }) 
  }
}
