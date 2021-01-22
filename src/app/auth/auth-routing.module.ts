import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RenewPasswordComponent } from './renew-password/renew-password.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login", 
    pathMatch: "full",
  },
  {
      path: "login",
      component: LoginComponent
  },
  {
      path: "registration",
      component: RegistrationComponent
  },
  {
      path: "renew-password",
      component: RenewPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }