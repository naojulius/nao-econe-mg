import { HttpRequest, HttpHandler, HttpEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpSentEvent, HttpUserEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LocalLoadingService } from '../@core/service/local-loading.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private loadingService: LocalLoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
   // this.loadingService.emitChange(true);
    if (!req.url.endsWith(environment.api_new_vente) && !req.url.endsWith(environment.api_new_flash_annonce) && !req.url.endsWith(environment.api_new_annonce)) { 
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          //  Authorization: `Bearer ${this.authService.getUserParam('usertoken')}`
        }
      })
    }
    return this.handleRequest(req, next);
  }
  handleRequest(req: HttpRequest<any>, next: HttpHandler) {
    // const JWT = `Bearer ${this.authService.getUserParam('usertoken')}`;
    // req = req.clone({
    //   setHeaders: {
    //     Authorization: JWT,
    //   },
    // });
    
    // return next.handle(req).pipe(
    //   tap(evt => {
    //     return evt;
    //   }),
    //   catchError(error => {
    //     if (error instanceof HttpErrorResponse) {
    //       if (error.status == 403) {
    //         this.router.navigate(['/']);
    //       } else if (error.status == 401) {
    //         // this.router.navigate([environment.home]);
    //         //window.location.href = this.router.url;
    //       }
    //     }
    //     return throwError(error);
    //   })
   // );

     return next.handle(req);
  }
}