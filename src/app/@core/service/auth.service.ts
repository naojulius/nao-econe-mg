import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpResponse } from '@angular/common/http';
import { User } from '../Entity/User/user';
import { UserLoginReq } from '../entity/user/user-login';


@Injectable()
export abstract class AuthService {
    abstract isAuthenticated(): boolean;
    abstract logOut();
    abstract getUserParam(param): string;
    abstract login(userLoginReq: UserLoginReq):  Observable<HttpResponse<string> | Observable<never>>;
    abstract Registration(user: User):  Observable<HttpResponse<string> | Observable<never>>;
}