import { Component, OnInit } from '@angular/core';
import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';
import {User} from "../model/User";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserAdmin: boolean = false;

  constructor(private adminBepalenService: AdminBepalenService) { }

  ngOnInit() {
    this.adminBepalenService.currentUserObservable.subscribe((_currentUser: User)=>{
          this.isUserAdmin = this.adminBepalenService.isUserAdmin(_currentUser);
          console.log(this.isUserAdmin)
    })
  }

}