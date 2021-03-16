import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {User} from '../../model/User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminBepalenService {
  private currentUserSubject = new BehaviorSubject({});
  currentUserObservable = this.currentUserSubject.asObservable();
  private _url = "http://localhost:8082/searchUser/";
  constructor(private http: HttpClient) { }


  searchUser(email: string, password: string){

    return this.http.get(this._url + email+"/" + password)
  }

  setUser(user:User){
    this.currentUserSubject.next(user);
  }
  admin(isAdmin:boolean){
    if(isAdmin === true){
      sessionStorage.setItem('isAdmin', 'Hoi');
      return true
    }
    return false;
  }

  isUserAdmin(user: User){   
    return user.adminrights;
  }
}
