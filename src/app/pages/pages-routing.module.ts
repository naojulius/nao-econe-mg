import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchatVenteComponent } from './achat-vente/achat-vente.component';
import { EmploieComponent } from './emploie/emploie.component';
import { HomeComponent } from './home/home.component';
import { PetiteAnnonceComponent } from './petite-annonce/petite-annonce.component';
import { RencontreComponent } from './rencontre/rencontre.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home", 
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "emploie",
    component: EmploieComponent
  },
  {
    path: "petite-annonce",
    component: PetiteAnnonceComponent
  },
  {
    path: "achat-vente",
    component: AchatVenteComponent
  },
  {
    path: "rencontre",
    component: RencontreComponent
  },
  {
    path: "forms",
    loadChildren: () => import('../pages/forms/forms.module')
    .then(m => m.LocalFormsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }