import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RenewPasswordComponent } from './renew-password/renew-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from '../pages/commons/common-shared.module';



@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistrationComponent, RenewPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonSharedModule
    
  ]
})
export class AuthModule { }
