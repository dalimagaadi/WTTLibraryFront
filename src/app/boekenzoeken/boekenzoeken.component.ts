import { Component, OnInit } from '@angular/core';
import {Boek} from "../model/Boek";
import {BoekServiceService} from '../service/boek/boek-service.service'
@Component({
  selector: 'app-boekenzoeken',
  templateUrl: './boekenzoeken.component.html',
  styleUrls: ['./boekenzoeken.component.css']
})
export class BoekenzoekenComponent implements OnInit {
  zoekTerm: string; 
  gevondenBoeken: Boek[] = [];
  constructor(private _boekService: BoekServiceService) { }

  
 

  ngOnInit() {

  }
  testing(event){
  }
  searchBoeken(){
    this._boekService.searchBoeken(this.zoekTerm).subscribe((boeken: Boek[])=>{
      this.gevondenBoeken = boeken;
    })
  }

}
