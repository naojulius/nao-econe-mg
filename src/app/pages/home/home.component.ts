import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PickList } from 'src/app/@core/entity/picklist/picklist';
import { Status } from 'src/app/@core/entity/status/status';
import { Vente } from 'src/app/@core/entity/vente/vente';
import { VenteReq } from 'src/app/@core/entity/vente/vente-req';
import { StateEnum } from 'src/app/@core/enumeration/state-enum';
import { AuthService } from 'src/app/@core/service/auth.service';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { PickListService } from 'src/app/@core/service/picklist.service';
import { VenteService } from 'src/app/@core/service/vente.service';
import { environment } from 'src/environments/environment';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Annonce } from 'src/app/@core/entity/annonce/annonce';
import { AnnonceReq } from 'src/app/@core/entity/annonce/annonce.req';
import { AnnonceService } from 'src/app/@core/service/annonce.service';
import { Emploie } from 'src/app/@core/entity/emploie/emploie';
import { EmploieService } from 'src/app/@core/service/emploie.service';
import { JobReq } from 'src/app/@core/entity/emploie/emploie-req';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loadingService: LocalLoadingService,
    private authService: AuthService,
    private pickListService: PickListService,
    private venteService: VenteService,
    private annonceService: AnnonceService, 
    private jobService: EmploieService,
    private router: Router
    ){ }
    isAuthenticated: boolean = false;
    category: Array<PickList> = [];
    venteReq: VenteReq = new VenteReq();
    status: Status = new Status();
    ventesListe: Array<Vente> = [];
    annoncesListe: Array<Annonce> = [];
    annonceReq: AnnonceReq = new AnnonceReq();
    imagePath: any = environment.api_host + environment.api_file_image;
    jobListe: Array<Emploie> = [];
    jobReq: JobReq = new JobReq();
    showLoading: Boolean = true;
  ngOnInit(): void {
    this.status.text = StateEnum.PAYED_NOT_EXPIRED;
    this.venteReq.status = this.status;
    this.jobReq.status = this.status;
    this.annonceReq.status = this.status;
    this.isAuthenticated = this.authService.isAuthenticated();
    this.pickListService.getCategory().subscribe((pickList: HttpResponse<Array<PickList>>)=>{
      this.category = pickList.body;
      this.getAnnonce();
      
    });
  }
  getAnnonce() {
    this.annonceService.getAnnoncesforUnAuthentified(false, this.annonceReq).subscribe((annonce: HttpResponse<Annonce[]>)=>{
      this.annoncesListe = annonce.body;
      this.getVente();
  });
  }
  getVente() {
    this.venteService.getVentesforUnAuthentified(false, this.venteReq).subscribe((ventes: HttpResponse<Array<Vente>>) => {
      this.ventesListe = ventes.body;
      this.getJob();
    });
  }
  getJob() {
    this.jobService.getVentesforUnAuthentified(false, this.jobReq).subscribe((jobs: HttpResponse<Emploie[]>)=>{
      this.jobListe = jobs.body;
      this.loadingService.emitChange(false);
      this.showLoading = false;
    });
  }

  onClickJob(data) {
    this.router.navigateByUrl(environment.job_detail, {
      state: {
        data: data
      } as any
    });
  }
  onClickVente(data){
    this.router.navigateByUrl(environment.vente_detail, {
      state: {
        data: data
      } as any
    });
  }
  onLogOut(){
    this.authService.logOut();
  }
  minValue: number = 10000;
  maxValue: number = 900000;
  options: Options = {
    floor: 10000,
    ceil: 900000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'AR ' + value;
        case LabelType.High:
          return 'AR ' + value;
        default:
          return '$' + value;
      }
    }
  }
}
