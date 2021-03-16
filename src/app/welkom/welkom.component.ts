import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';

@Component({
  selector: 'app-welkom',
  templateUrl: './welkom.component.html',
  styleUrls: ['./welkom.component.css']
})
export class WelkomComponent implements OnInit {
  _gebruiker: User;
  constructor(private adminBepalenService: AdminBepalenService) { }

  ngOnInit() {
    this.adminBepalenService.currentUserObservable.subscribe((_currentUser: User)=>{
      next: this._gebruiker = _currentUser
    })
  }

}
