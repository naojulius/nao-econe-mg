import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { NewVenteComponent } from './new-vente/new-vente.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule } from '@angular/forms';
import { NewAnnonceComponent } from './new-annonce/new-annonce.component';
import { NewEmploieComponent } from './new-emploie/new-emploie.component';
import { NewRencontreComponent } from './new-rencontre/new-rencontre.component';
import { NewFlashAnnonceComponent } from './new-flash-annonce/new-flash-annonce.component';




@NgModule({
  declarations: [FormsComponent, NewVenteComponent, NewAnnonceComponent, NewEmploieComponent, NewRencontreComponent, NewFlashAnnonceComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
  ]
})
export class LocalFormsModule { }
