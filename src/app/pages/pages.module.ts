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
import { VenteTabComponent } from './home/tabs/vente-tab/vente-tab.component';
import { AnnonceTabComponent } from './home/tabs/annonce-tab/annonce-tab.component';
import { EmploieTabComponent } from './home/tabs/emploie-tab/emploie-tab.component';
import { RencontreTabComponent } from './home/tabs/rencontre-tab/rencontre-tab.component'; 
import { RangeSliderModule } from 'ngx-range-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';




@NgModule({
  declarations: [PagesComponent, HomeComponent, PetiteAnnonceComponent, AchatVenteComponent, RencontreComponent, EmploieComponent, VenteTabComponent, AnnonceTabComponent, EmploieTabComponent, RencontreTabComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxPaginationModule,
    RangeSliderModule ,
    NgxSliderModule
    
    
  ],
})
export class PagesModule { }
