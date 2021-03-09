import { Component, OnInit } from '@angular/core';
import { AdminBepalenService } from '../service/admin-bepalen.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserAdmin: boolean = true;

  constructor(private adminBepalenService: AdminBepalenService) { }

  ngOnInit() {
    this.isUserAdmin = this.adminBepalenService.isUserAdmin();
  }

}