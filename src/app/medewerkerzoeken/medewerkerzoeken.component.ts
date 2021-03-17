import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";

@Component({
  selector: 'app-medewerkerzoeken',
  templateUrl: './medewerkerzoeken.component.html',
  styleUrls: ['./medewerkerzoeken.component.css']
})
export class MedewerkerzoekenComponent implements OnInit {
  zoekTerm: string; 
  gevondenUser: User[] = [];
  constructor() { }

  ngOnInit() {

  }
  
  

}
