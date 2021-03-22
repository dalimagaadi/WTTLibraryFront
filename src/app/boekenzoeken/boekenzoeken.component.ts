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
  constructor(private _boekService: BoekServiceService, public adminBepalenService: AdminBepalenService) { }

  
 

  ngOnInit() {
    this.adminBepalenService.currentUserObservable.subscribe((_currentUser: User)=>{
      this.isUserAdmin = this.adminBepalenService.isUserAdmin(_currentUser);
      console.log(this.isUserAdmin)
})

  }
  testing(event){
  }
  searchBoeken(){
    this._boekService.searchBoeken(this.zoekTerm).subscribe((boeken: Boek[])=>{
      this.gevondenBoeken = boeken;
    })
  }

}
