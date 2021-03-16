import { Injectable } from '@angular/core';
import {User} from '../../model/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminBepalenService {

  private _url = "http://localhost:8082/searchUser/";
  constructor(private http: HttpClient) { }


  searchUser(email: string, password: string){

    return this.http.get(this._url + email+"/" + password)
  }

  admin(isAdmin:boolean){
    if(isAdmin === true){
      sessionStorage.setItem('isAdmin', 'Hoi');
      return true
    }
    return false;
  }

  isUserAdmin(user: User){   
    console.log(user.adminrights) 
    return !(user === null)
  }
}
