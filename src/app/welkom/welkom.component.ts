import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Reservering } from '../model/Reservering';

import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';
import { BoekServiceService } from '../service/boek/boek-service.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-welkom',
  templateUrl: './welkom.component.html',
  styleUrls: ['./welkom.component.css']
})
export class WelkomComponent implements OnInit {
  isUserAdmin: boolean = false;
  _gebruiker: User;
  gevondenAllReserveringen: Reservering[] = [];
  gevondenUserReserveringen: Reservering[] = [];
  email: string;
  constructor(private adminBepalenService: AdminBepalenService, private _boekService: BoekServiceService,    private router: Router){ }

  ngOnInit() {
    this.adminBepalenService.currentUserObservable.subscribe((_currentUser: User) => {
      next: this._gebruiker = _currentUser
    })

    this.adminBepalenService.currentUserObservable.subscribe((_currentUser: User) => {
      this.isUserAdmin = this.adminBepalenService.isUserAdmin(_currentUser);
      console.log(this.isUserAdmin)
    })
    this.searchAllReserveringen();
    this.searchUserReserveringen();
  }
  naarpagina(wtId: String){
    let isbn = wtId.split('.')[0];
    this.router.navigate(['boekpagina', isbn])
    }
  searchAllReserveringen() {
    this._boekService.getReserveringen().subscribe((allreservering: Reservering[]) => {
      console.log(allreservering)
      this.gevondenAllReserveringen = allreservering;
    })
  }

  searchUserReserveringen(){
    this.email = sessionStorage.getItem('authenticatedUser')
    this._boekService.getUserReserveringen(this.email).subscribe((allreservering: Reservering[]) => {
      this.gevondenUserReserveringen = allreservering;
    })
  }

}
