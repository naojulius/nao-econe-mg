import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/@core/entity/User/user';
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
  r={};
  rlogin: string = "";
  rfirstName: string = ""; 
  rlastName: string = ""; 
  remail: string = ""; 
  rpassword: string = ""; 
  user :User = new User();

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

  registration(){
    this.user.email = this.remail;
    this.user.firstName = this.rfirstName;
    this.user.lastName = this.rlastName;
    this.user.login = this.rlogin;
    this.user.password = this.rpassword;

    this.authService.Registration(this.user).subscribe(data=>{ 
        
    })
    
  }

}
