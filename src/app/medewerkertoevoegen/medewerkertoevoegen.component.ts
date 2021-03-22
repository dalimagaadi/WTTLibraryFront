import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {AdminBepalenService} from '../service/admin-service/admin-bepalen.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-medewerkertoevoegen',
  templateUrl: './medewerkertoevoegen.component.html',
  styleUrls: ['./medewerkertoevoegen.component.css']
})
export class MedewerkertoevoegenComponent implements OnInit {
voornaam: string;
achternaam: string;
email: string;
password: string;
adminrights: boolean;

message: string;

  constructor(private AdminBepalenService:AdminBepalenService) { }

  ngOnInit(): void {
  }

handleAddUser(){
  let user = new User();
user.voornaam = this.voornaam;
user.achternaam = this.achternaam;
user.email = this.email;
user.password = this.password;
user.adminrights = this.adminrights;
this.AdminBepalenService.addUser(user).subscribe(()=>{
})
console.log(this.voornaam);
this.message = "Gebruiker is toegevoegd";
}


}
