import { Component, OnInit } from '@angular/core';
import {BoekServiceService} from '../service/boek/boek-service.service'
import {Boek} from "../model/Boek";
import {Router} from '@angular/router'

@Component({
  selector: 'app-boektoevoegen',
  templateUrl: './boektoevoegen.component.html',
  styleUrls: ['./boektoevoegen.component.css']
})
export class BoektoevoegenComponent implements OnInit {
  auteur: string;
  titel: string;
  isbn: string;
  aantal: number;
  status: string;
  tags: string;
  toegevoegdStatus=false;
  toegevoegd="Het boek is succesvol toegevoegd!"


  constructor(private _boekService: BoekServiceService, private router: Router) { }

  ngOnInit(): void {
}

handleAddBook(){  
  if (this.auteur==null||this.aantal==null||this.isbn==null||this.tags==null||this.titel==null){
    alert("Er is een veld niet ingevuld. Vul dit eerst in om het boek toe te voegen.")  
  } 
  else{
  let boek = new Boek();
  boek.auteur=this.auteur;
  boek.aantal=this.aantal;
  boek.isbn=this.isbn;
  boek.tags=this.tags;
  boek.status="Beschikbaar";
  boek.titel=this.titel;
  console.log("this.auteur"+this.auteur)
  this._boekService.addBook(boek).subscribe((res)=>{    console.log(res)
  }) 
  this.auteur=null;
  this.aantal=null;
  this.isbn=null;
  this.tags=null;
  this.titel=null;
  this.toegevoegdStatus=true;
  setTimeout(() => {
    this.toegevoegdStatus=false;
  }, 4000); 
}
}
  
}
