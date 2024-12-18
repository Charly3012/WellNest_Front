import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/modules/auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthNotLoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.authService.getToken()){
        return true;
      }else{
        this.router.navigate(['auth/login'])
        return false;
      }

  }


}
