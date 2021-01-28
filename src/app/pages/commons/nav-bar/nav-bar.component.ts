import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  homeActive: string = "";
  achatVenteActive: string = "";
  annonceActive: string = "";
  emploieActive: string = "";
  rencontreActive: string = "";
  constructor(private authService: AuthService, public router: Router) { }
  isAuthenticated: Boolean = false;
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log(this.router.url);
    if(this.router.url.endsWith(environment.home)){
      this.homeActive = "active";
      this.achatVenteActive = "";
      this.annonceActive = "";
      this.rencontreActive = "";
      this.emploieActive = "";
    }

    if(this.router.url.endsWith(environment.achat_vente)){
      this.homeActive = "";
      this.achatVenteActive = "active";
      this.annonceActive = "";
      this.rencontreActive = "";
      this.emploieActive = "";
    }
    
    if(this.router.url.endsWith(environment.emploie)){
      this.homeActive = "";
      this.achatVenteActive = "";
      this.annonceActive = "";
      this.rencontreActive = "";
      this.emploieActive = "active";
    }

    if(this.router.url.endsWith(environment.rencontre)){
      this.homeActive = "";
      this.achatVenteActive = "";
      this.annonceActive = "";
      this.rencontreActive = "active";
      this.emploieActive = "";
    }
    if(this.router.url.endsWith(environment.petite_annonce)){
      this.homeActive = "";
      this.achatVenteActive = "";
      this.annonceActive = "active";
      this.rencontreActive = "";
      this.emploieActive = "";
    }
  }
  onLogOut(){
    this.authService.logOut();
  }

}
