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
    private venteService: VenteService
    ){ }
    isAuthenticated: boolean = false;
    category: Array<PickList> = [];
    venteReq: VenteReq = new VenteReq();
    status: Status = new Status();
    ventesListe: Array<Vente> = [];
    imagePath: any = environment.api_host + environment.api_file_image;
  ngOnInit(): void {
    this.status.text = StateEnum.PAYED_NOT_EXPIRED;
    this.venteReq.status = this.status;
    this.isAuthenticated = this.authService.isAuthenticated();
    this.pickListService.getCategory().subscribe((pickList: HttpResponse<Array<PickList>>)=>{
      this.category = pickList.body;
      this.loadingService.emitChange(false);
      console.log(this.category);
    });

    this.venteService.getVentesforUnAuthentified(false, this.venteReq).subscribe((ventes: HttpResponse<Array<Vente>>) => {
      this.ventesListe = ventes.body;
      this.loadingService.emitChange(false);
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
