import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/modules/auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthYesLoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!(this.authService.getToken())){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }

}
