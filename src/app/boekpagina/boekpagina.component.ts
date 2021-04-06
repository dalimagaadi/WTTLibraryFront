import { Component, OnInit } from '@angular/core';
import { Boek } from "../model/Boek";
import { Reservering } from '../model/Reservering';
import { BoekServiceService } from '../service/boek/boek-service.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Exemplaar } from '../model/Exemplaar';
import {ExemplaarReservering} from "../model/ExemplaarReservering";


@Component({
  selector: 'app-boekpagina',
  templateUrl: './boekpagina.component.html',
  styleUrls: ['./boekpagina.component.css']
})
export class BoekpaginaComponent implements OnInit {
  isbn:string
  exemplaarReservering: ExemplaarReservering[] = []
  reserveringenAanwezig: boolean = false;
  boek: Boek
  gereed: boolean = false;

  constructor(private _boekService: BoekServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];
    this.boek = new Boek()
    this._boekService.getBook(this.isbn)
    .toPromise()
    .then((data => this.boek = data))
    .then(()=>{
      this.boek.exemplaren.forEach(ex =>{
        let _exRes: ExemplaarReservering = {
          exemplaar: ex,
        }
        this.exemplaarReservering.push(_exRes)
      })
      this.exemplaarReservering.forEach(exRes=>{
        if(exRes.exemplaar.status == "Gereserveerd" || exRes.exemplaar.status == "Uitgeleend"){
          this.reserveringenAanwezig = true;
          this._boekService.getExemplaarReservering(exRes.exemplaar.id).toPromise().then((res: Reservering)=>{
            exRes.reservering = res;
          })
        }
        this.gereed = true;
      })
    })
  }

leenBoekUit(reservering: Reservering){
  this._boekService.leenBoekUit(reservering).subscribe((data =>{
      let exemp =this.exemplaarReservering.find(x => x.exemplaar.wtid == reservering.exemplaar.wtid)
      exemp.exemplaar.status = "Uitgeleend"
      alert('Boek is uitgeleend')
  }))
}

brengBoekTerug(reservering: Reservering){
  this._boekService.brengBoekTerug(reservering).subscribe((data =>{
    this.boek.aantal = this.boek.aantal+1;
    this._boekService.updateBook(this.boek.isbn, this.boek ).subscribe(data=>{
      console.log(reservering.exemplaar.status)
        let exemp =this.exemplaarReservering.find(x => x.exemplaar.wtid == reservering.exemplaar.wtid)
        exemp.reservering.user = null;
        exemp.exemplaar.status = "Beschikbaar"
        alert("Boek is terug gebracht")
    })
}))
}
}
