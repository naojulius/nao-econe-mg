import { LabelType, Options } from '@angular-slider/ngx-slider';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiTableDataSource } from 'src/app/@core/entity/datatable/api-data-table-source';
import { Datatable } from 'src/app/@core/entity/datatable/data-table';
import { GetTableDataParam } from 'src/app/@core/entity/datatable/get-table-data-param';
import { Emploie } from 'src/app/@core/entity/emploie/emploie';
import { PickList } from 'src/app/@core/entity/picklist/picklist';
import { EmploieService } from 'src/app/@core/service/emploie.service';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { PickListService } from 'src/app/@core/service/picklist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-emploie',
  templateUrl: './emploie.component.html',
  styleUrls: ['./emploie.component.css']
})
export class EmploieComponent implements OnInit {

  constructor(private jobService: EmploieService,
     private pickListService: PickListService, 
     private loadingService: LocalLoadingService, 
     private router: Router
     ) { }
     public showLoading: Boolean = true;
  jobListe: Array<Emploie> = [];
  category: Array<PickList> = [];
  venteList: any = [];
  source: ApiTableDataSource = new ApiTableDataSource();
  getTableDataParam: GetTableDataParam = {
    page: 1,
    pageLength: 20,
    //fields: ["nom_produit", "is_new_produit"],
    // search: { Key: "", "Value":["nomProduit","statutProduit"]},
     filters: [{ Key: "Status.Text", Value:"PAYED_NOT_EXPIRED"}]
  } as GetTableDataParam; 
  imagePath: any = environment.api_host + environment.api_file_image;
  ngOnInit(): void {
    this.pickListService.getCategory().subscribe((pickList: HttpResponse<Array<PickList>>)=>{
      this.category = pickList.body;
      this.loadingService.emitChange(false);
      
    });
    this.updateData();
    
  }
  getPaginateCount() {
    return new Array(this.source.count());
  }

  onPageChanged(value) {
    this.getTableDataParam.page = value;
    this.updateData();
  }
  onClickJob(data) {
    this.router.navigateByUrl(environment.job_detail, {
      state: {
        data: data
      } as any
    });
  }
  updateData() {
    this.loadingService.emitChange(true);
    this.jobService.getAll(this.getTableDataParam).subscribe((jobs: HttpResponse<Datatable<Array<Emploie>>>) => {
      this.jobListe = jobs.body.data;
      this.source.setPaging(0, jobs.body.total, true);
      this.source.setTotal(jobs.body.total);
      this.loadingService.emitChange(false);
      this.showLoading = false;
    }, (error: Error) => {
      this.loadingService.emitChange(false);
    });
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
