import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boek } from '../model/Boek';
import {BoekServiceService} from '../service/boek/boek-service.service'

@Component({
  selector: 'app-boekbewerken',
  templateUrl: './boekbewerken.component.html',
  styleUrls: ['./boekbewerken.component.css']
})
export class BoekbewerkenComponent implements OnInit {
  isbn:string
  boek: Boek

  constructor(
    private _boekService: BoekServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];
    this.boek = new Boek()
    this._boekService.getBook(this.isbn)
    .subscribe(
        data => this.boek = data
    )
  }
  
  bewerkBoek(){
    this._boekService.updateBook(this.isbn, this.boek)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['boekenzoeken'])
      }
    )
  }
}
