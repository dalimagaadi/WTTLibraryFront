import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AdminBepalenService } from '../service/admin-service/admin-bepalen.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private AdminBepalenService: AdminBepalenService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.AdminBepalenService.isUserLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;
  }

}
