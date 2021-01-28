import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token-inrterceptor';
import { LocalLoadingService } from './@core/service/local-loading.service';
import { PickListService } from './@core/service/picklist.service';
import { ApiPickListService } from './pages/api-services/api-picklist.service';
import { ApiService } from './@core/service/api.service';
import { VenteService } from './@core/service/vente.service';
import { ApiVenteService } from './pages/api-services/api-vente.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './@core/service/auth.service';
import { ApiAuthService } from './pages/api-services/api-auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AnnonceService } from './@core/service/annonce.service';
import { ApiAnnonceService } from './pages/api-services/api-annonce.service';
import { EmploieService } from './@core/service/emploie.service';
import { ApiEmploieService } from './pages/api-services/api-emploie.service';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule, 
    NgbModule,
    AuthModule,
    NgxLoadingModule.forRoot({animationType: ngxLoadingAnimationTypes.circleSwish}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
       multi: true
    },
    {
      provide: PickListService, useClass: ApiPickListService
    },
    {
      provide: VenteService, useClass: ApiVenteService
    },
    {
      provide: AuthService, useClass: ApiAuthService
    },
    {
      provide: AnnonceService, useClass: ApiAnnonceService
    },
    {
      provide: EmploieService, useClass: ApiEmploieService
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, 
    JwtHelperService, 
    LocalLoadingService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
