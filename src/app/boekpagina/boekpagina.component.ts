import { Component, OnInit } from '@angular/core';
import { Boek } from "../model/Boek";
import { BoekServiceService } from '../service/boek/boek-service.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Exemplaar } from '../model/Exemplaar';
@Component({
  selector: 'app-boekpagina',
  templateUrl: './boekpagina.component.html',
  styleUrls: ['./boekpagina.component.css']
})
export class BoekpaginaComponent implements OnInit {
  isbn:string
  boek: Boek

  constructor( private _boekService: BoekServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];
    this.boek = new Boek()
    this._boekService.getBook(this.isbn)
    .subscribe((
      data => this.boek = data));
      
    
    
  }


}
