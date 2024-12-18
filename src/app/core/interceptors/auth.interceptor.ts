import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/modules/auth/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthServiceService
  ) {}

  //Note: Is necesary declarate this interceptor at principal module like a provider
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    if(token)
    {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(cloned);
    }else{
      return next.handle(request);
    }

  }
}
