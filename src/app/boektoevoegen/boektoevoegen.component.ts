import { Component, OnInit } from '@angular/core';
import {BoekServiceService} from '../service/boek/boek-service.service'
import {Boek} from "../model/Boek";

@Component({
  selector: 'app-boektoevoegen',
  templateUrl: './boektoevoegen.component.html',
  styleUrls: ['./boektoevoegen.component.css']
})
export class BoektoevoegenComponent implements OnInit {
  auteur: string;



  constructor(private _boekService: BoekServiceService) { }

  ngOnInit(): void {
}

handleAddBook(){  
  let boek = new Boek();
  boek.auteur=this.auteur;
  console.log("this.auteur"+this.auteur)
  this._boekService.addBook(boek).subscribe(()=>{    
  })
}
  
}
