import { Component, OnInit } from '@angular/core';
import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private AdminBepalenService: AdminBepalenService
  ) { }

  ngOnInit(): void {
    this.AdminBepalenService.logout();
  }

}
