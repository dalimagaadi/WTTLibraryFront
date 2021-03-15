import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private AdminBepalenService: AdminBepalenService
  ) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.AdminBepalenService.admin(false)){
      console.log("hoi");
    }
  }

}