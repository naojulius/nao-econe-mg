import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/@core/Entity/User/user';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/@core/service/auth.service';
import { UserLoginReq } from 'src/app/@core/entity/user/user-login';
import { ApiService } from 'src/app/@core/service/api.service';

@Injectable()
export class ApiAuthService extends AuthService {
  Registration(user: User): Observable<HttpResponse<User> | Observable<never>> {
    let userLoginReq: UserLoginReq = {
      email: user.email,
      password: user.password,
    };
    this.login(userLoginReq).subscribe(data => {
      console.log(data);
    })
    throw new Error('Method not implemented.');
  }
  getUserParam(param: any): string {
    const token = localStorage.getItem('token');
    let decodedToken = this.jwtHelper.decodeToken(token);
    if (param != 'usertoken') {
      return decodedToken ? decodedToken[param] : '';
    } else {
      return token;
    }
  }
  logOut() {
    localStorage.removeItem('token');
    // this.localNotificationService.showSuccessNotif(
    //   2,
    //   'Déconnexion Réussi!',
    //   true,
    //   false
    // );
    window.location.href = this.router.url;
  }
  constructor(
    private apiService: ApiService,
    public jwtHelper: JwtHelperService,
    private router: Router,
    //private notificationService: NotificationService,
//    private localNotificationService: LocalNotificationService
  ) {
    super();
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  login(userLoginReq: UserLoginReq): Observable<HttpResponse<string> | Observable<never>> {
    let showErrorNotif: boolean = false;
    return this.apiService.post<string>(environment.doLogin, userLoginReq).pipe(
        map((x: HttpResponse<string>) => {
            return this.handleResponse<string>(showErrorNotif, x);
        }),
        catchError(error => {
            return this.catchError(showErrorNotif, error);
        })
    );
  }

  catchError(showErrorNotif: boolean, error: any): Observable<never> {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      if (showErrorNotif) {
        console.log(error, 'Erreur');
      }
      throw new Error(error);
    }
  }
  handleResponse<T>(showErrorNotif: boolean, response: any): HttpResponse<T> {
    if (showErrorNotif && response.status == 202) {
      console.log(response.body, 'Erreur');
      throw new Error(response.body.toString());
    }
    return response;
  }
}
