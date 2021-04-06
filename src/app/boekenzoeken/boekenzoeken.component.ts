import { Component, OnInit } from '@angular/core';
import { Boek } from "../model/Boek";
import { BoekServiceService } from '../service/boek/boek-service.service'
import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';
import { User } from "../model/User";
import { Router } from '@angular/router';

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
  toegevoegd = "Er is een exemplaar toegevoegd."
  boek: Boek;

  constructor(private _boekService: BoekServiceService,
    public adminBepalenService: AdminBepalenService,
    private router: Router) { }

  zoekTermAanwezig: boolean = false;

  ngOnInit() {
    this.searchAllBoeken();
    this.zoekChecker()
    this.adminBepalenService.currentUserObservable.subscribe((_currentUser: User) => {
      this.isUserAdmin = this.adminBepalenService.isUserAdmin(_currentUser);
    })
  }

 
  
  searchBoeken() {
    this._boekService.searchBoeken(this.zoekTerm).subscribe((boeken: Boek[]) => {
      this.gevondenBoeken = boeken;
      if (this.gevondenBoeken.length > 0) {
        this.zoekTermAanwezig = true;
      }
      else {
        this.zoekTermAanwezig = false;
      }
    })
  }

  searchAllBoeken() {
    this._boekService.searchAllBoeken().subscribe((allboeken: Boek[]) => {
      this.gevondenAllBoeken = allboeken;
    })
  }

  zoekChecker() {
    if (this.gevondenBoeken.length > 0) {
      this.zoekTermAanwezig = true;
    }
    else {
      this.zoekTermAanwezig = false;
    }
  }

  bewerkBoek(isbn) {
    this.router.navigate(['boekbewerken', isbn])
  }

  naarpagina(isbn){
  this.router.navigate(['boekpagina', isbn])
  }

  maakReservering(isbn){
    this._boekService.maakReservering(isbn).subscribe((reservering =>{
      this._boekService.getBook(isbn)
        .subscribe((jojo:Boek) => {jojo.aantal = jojo.aantal -1,
        this._boekService.updateBook(isbn, jojo).subscribe(
          data => { 
            this.gevondenAllBoeken.find(x => x.isbn ==isbn).aantal=jojo.aantal
            this.gevondenBoeken.find(x=> x.isbn == isbn).aantal =jojo.aantal
          })
          ;
          })  
      })
    )}    
  
  
  
  


  exemplaartoevoegen(isbn) {
    this._boekService.getExemplaarAmount(isbn).subscribe((amount: number) => {
      this._boekService.addExemplaar(isbn, amount).subscribe((res) => {
        this._boekService.getBook(isbn)
        .subscribe((jojo:Boek) => {jojo.aantal = jojo.aantal +1,
        this._boekService.updateBook(isbn, jojo).subscribe(
          data => { 
            // console.log(isbn)
            // console.log(this.gevondenAllBoeken.findIndex(x=>x.isbn == isbn))
            this.gevondenAllBoeken.find(x => x.isbn ==isbn).aantal=jojo.aantal
            this.gevondenBoeken.find(x=> x.isbn == isbn).aantal =jojo.aantal            
          })
          ;
          })  
      })
    })    
  
  }
}
