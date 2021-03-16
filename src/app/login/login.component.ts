import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';
import {User} from '../model/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string; 
  password: string;
  gevondenUser: User;



  constructor(private router: Router,
    private AdminBepalenService: AdminBepalenService
  ) { }

  ngOnInit(): void {
  }

  handleLogin(){   
      this.AdminBepalenService.searchUser(this.userName,this.password).subscribe((gebruiker: User)=>{
      this.gevondenUser=gebruiker;
      console.log(this.gevondenUser);
      if (this.gevondenUser==null){
        alert("joejoe")
        
      } 
      else{
        this.router.navigate(["welkom"]);
      }
    })


    // if(this.AdminBepalenService.admin(false)){
    //   console.log("hoi");
    }
  }