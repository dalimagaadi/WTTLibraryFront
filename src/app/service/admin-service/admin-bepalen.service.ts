import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from '../../model/User';
import { HttpClient } from '@angular/common/http';
//new
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminBepalenService  {

  private currentUserSubject = new BehaviorSubject({});
  currentUserObservable = this.currentUserSubject.asObservable();
  private _url = "http://localhost:8082/loginUser/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { 
  let object = {}
  object['adminrights'] = sessionStorage.getItem('adminrights');
  object['voornaam'] = sessionStorage.getItem('voornaamitem')
  this.currentUserSubject.next(object)

  }

  searchUser(email: string, password: string) {
    return this.http.get(this._url + email + "/" + password)
  }
  
  setUser(user:User){
      console.log("Called")
      this.currentUserSubject.next(user);
      sessionStorage.setItem('authenticatedUser', user.email)
      sessionStorage.setItem('voornaamitem', user.voornaam)
      let adminrechten = this.isUserAdmin(user);
      sessionStorage.setItem('adminrights', String(adminrechten)) 
      }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  // admin(isAdmin:boolean){
  //   if(isAdmin === true){
  //     sessionStorage.setItem('isAdmin', 'Hoi');
  //     return true
  //   }
  //   return false;
  // }

  isUserAdmin(user: User) {
    var adminrechten: string = String(user.adminrights);
    if (adminrechten === "true")
      return true;
    return false;
  }

determineAdmin(){
  let admin = sessionStorage.getItem('adminrights')
  var adminbool: Boolean = Boolean(admin);
  return adminbool
}

getUserEmail(){
  let userEmail = sessionStorage.getItem('authenticatedUser')
  
  return userEmail
}

addUser(user: User){
  return this.http.post("http://localhost:8082/addUser", user, this.httpOptions);
}
}