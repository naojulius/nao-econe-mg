import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../@core/service/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl(environment.home);
      return false;
    }
    return true;
  }
}