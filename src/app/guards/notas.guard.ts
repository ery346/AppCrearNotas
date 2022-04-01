import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../home/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotasGuard implements CanActivate {
  constructor(){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
      if(localStorage.getItem('token')){
        return true;
      }
    return false;
  }
  
}
