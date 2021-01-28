import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PetiteAnnonceComponent } from './petite-annonce/petite-annonce.component';
import { AchatVenteComponent } from './achat-vente/achat-vente.component';
import { RencontreComponent } from './rencontre/rencontre.component';
import { EmploieComponent } from './emploie/emploie.component';
import { PagesRoutingModule } from './pages-routing.module';
import { VenteService } from '../@core/service/vente.service';
import { ApiVenteService } from './api-services/api-vente.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { RangeSliderModule } from 'ngx-range-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { LocalFormsModule } from './forms/forms.module';
import { CommonSharedModule } from './commons/common-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { DetailsModule } from './details/details.module';




@NgModule({
  declarations: [PagesComponent, HomeComponent, PetiteAnnonceComponent, AchatVenteComponent, RencontreComponent, EmploieComponent,],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxPaginationModule,
    RangeSliderModule ,
    NgxSliderModule,
    LocalFormsModule,
    CommonSharedModule,
    DetailsModule
    
    
  ],
})
export class PagesModule { }
