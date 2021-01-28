import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnonceDetailsComponent } from './annonce-details/annonce-details.component';
import { EmploieDetailsComponent } from './emploie-details/emploie-details.component';
import { VenteDetailsComponent } from './vente-details/vente-details.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/", 
    pathMatch: "full",
  },
  {
      path: 'emploie-details',
      component: EmploieDetailsComponent
  },
  {
      path: 'annonce-details',
      component: AnnonceDetailsComponent
  },
  {
      path: 'rencontre-details',
      component: AnnonceDetailsComponent
  },
  {
      path: 'vente-details',
      component: VenteDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }