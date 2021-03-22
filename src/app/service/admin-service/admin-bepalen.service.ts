import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {User} from '../../model/User';
import {HttpClient} from '@angular/common/http';
//new
import { HttpHeaders } from '@angular/common/http';
//corine

@Injectable({
  providedIn: 'root'
})

export class AdminBepalenService {
  private currentUserSubject = new BehaviorSubject({});
  currentUserObservable = this.currentUserSubject.asObservable();
  private _url = "http://localhost:8082/searchUser/";

  //new
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
  //corine

  constructor(private http: HttpClient) { }

  searchUser(email: string, password: string){
    return this.http.get(this._url + email+"/" + password)
  }

  setUser(user:User){
    this.currentUserSubject.next(user);
    sessionStorage.setItem('authenticatedUser', user.email)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
  
  // admin(isAdmin:boolean){
  //   if(isAdmin === true){
  //     sessionStorage.setItem('isAdmin', 'Hoi');
  //     return true
  //   }
  //   return false;
  // }

  isUserAdmin(user: User){ 
    var adminrechten: string = String(user.adminrights);
    sessionStorage.setItem('adminrights', adminrechten)  
    return user.adminrights;
  }

  determineAdmin(){
    let admin = sessionStorage.getItem('adminrights')
    var adminbool: Boolean = Boolean(admin);
    return adminbool
  }


//new
  addUser(user:User){
    return this.http.post("http://localhost:8082/addUser",user, this.httpOptions);
  }
}
//corine
