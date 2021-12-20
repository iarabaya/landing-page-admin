import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserGuard implements CanLoad, CanActivate{

  constructor(private loginService: LoginService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      
      return this.loginService.verificarAutenticacion()
      .pipe(
        tap( isAuthenticated => {
          if(!isAuthenticated){
            this.router.navigate(['./auth/login'])
          }
        } )
      )
      
    //  if( this.loginService.user.email){
    //     return true;
    //   }
    //   console.log('bloqueado por can activate');
    //   return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.loginService.verificarAutenticacion()
      .pipe(
        tap( isAuthenticated => {
          if(!isAuthenticated){
            this.router.navigate(['./auth/login'])
          }
        } )
      )

      // if( this.loginService.user.email){
      //   return true;
      // }
      // console.log('bloqueado por can load');
      // return false;
    }
  
}
