import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminBepalenService {

  constructor() { }

  admin(isAdmin:boolean){
    if(isAdmin === true){
      sessionStorage.setItem('isAdmin', 'Hoi');
      return true
    }
    return false;
  }

  isUserAdmin(){
    let user = sessionStorage.getItem('isAdmin')
    return !(user === null)
  }

}
