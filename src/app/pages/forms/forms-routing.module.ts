import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAnnonceComponent } from './new-annonce/new-annonce.component';
import { NewEmploieComponent } from './new-emploie/new-emploie.component';
import { NewRencontreComponent } from './new-rencontre/new-rencontre.component';
import { NewVenteComponent } from './new-vente/new-vente.component';


const routes: Routes = [
  {
    path: "new-vente",
    component: NewVenteComponent
  },
  {
    path: "new-annonce",
    component: NewAnnonceComponent
  },
  {
    path: "new-emploie",
    component: NewEmploieComponent
  },
  {
    path: "new-rencontre",
    component: NewRencontreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }