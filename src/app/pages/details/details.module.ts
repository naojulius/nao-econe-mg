import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploieDetailsComponent } from './emploie-details/emploie-details.component';
import { VenteDetailsComponent } from './vente-details/vente-details.component';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';
import { RencontreDetailsComponent } from './rencontre-details/rencontre-details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { CommonSharedModule } from '../commons/common-shared.module';
import { DetailsComponent } from './details.component';
import { DragScrollModule } from 'ngx-drag-scroll';



@NgModule({
  declarations: [EmploieDetailsComponent, VenteDetailsComponent, AnnonceDetailsComponent, RencontreDetailsComponent, DetailsComponent],
  imports: [
    CommonModule,
    CommonSharedModule,
    DetailsRoutingModule,
    DragScrollModule
    
  ]
})
export class DetailsModule { }
