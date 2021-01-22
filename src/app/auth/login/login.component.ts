import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginReq } from 'src/app/@core/entity/user/user-login';
import { AuthService } from 'src/app/@core/service/auth.service';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loadingService: LocalLoadingService, 
    private authService: AuthService,
    private router: Router,
    ) { }
  email: string = "";
  password: string = "";
  f = {};
  ngOnInit(): void {
    this.loadingService.emitChange(false);
  }
  login(){
    let userLoginReq: UserLoginReq = new UserLoginReq();
     userLoginReq.email = this.email;
     userLoginReq.password = this.password;
    
    this.authService.login(userLoginReq).subscribe(data=>{
          localStorage.setItem('token', data['body']);
          this.router.navigateByUrl(environment.home);
    });
  }

}
