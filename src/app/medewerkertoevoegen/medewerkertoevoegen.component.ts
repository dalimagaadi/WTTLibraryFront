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
adminrights: boolean =false;
toegevoegdStatus=false;
toegevoegd="Gebruiker is succesvol toegevoegd!"

message: string;

  constructor(private AdminBepalenService:AdminBepalenService) { }

  ngOnInit(): void {
  }

handleAddUser(){
  if (this.voornaam==null||this.achternaam==null||this.email==null||this.password==null){
    alert("Er is een veld niet ingevuld. Vul dit eerst in om de user toe te voegen.")  
  } 
  else{
  let user = new User();
  user.voornaam = this.voornaam;
  user.achternaam = this.achternaam;
  user.email = this.email;
  user.password = this.password;
  user.adminrights = this.adminrights;
  this.AdminBepalenService.addUser(user).subscribe(()=>{
  })
  this.voornaam=null;
  this.achternaam=null;
  this.email=null;
  this.password=null;
  this.toegevoegdStatus=true;
  setTimeout(() => {
    this.toegevoegdStatus=false;
  }, 3000); 
}
}

}
