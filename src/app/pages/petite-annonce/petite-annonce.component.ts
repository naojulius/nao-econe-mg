import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/@core/entity/annonce/annonce';
import { ApiTableDataSource } from 'src/app/@core/entity/datatable/api-data-table-source';
import { Datatable } from 'src/app/@core/entity/datatable/data-table';
import { GetTableDataParam } from 'src/app/@core/entity/datatable/get-table-data-param';
import { PickList } from 'src/app/@core/entity/picklist/picklist';
import { AnnonceService } from 'src/app/@core/service/annonce.service';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { PickListService } from 'src/app/@core/service/picklist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-petite-annonce',
  templateUrl: './petite-annonce.component.html',
  styleUrls: ['./petite-annonce.component.css']
})
export class PetiteAnnonceComponent implements OnInit {

  constructor(
    private loadingService: LocalLoadingService, 
    private pickListService: PickListService,
      private annonceService: AnnonceService
    ) { }
  category: Array<PickList> = [];
  annoncesList: any = [];
  source: ApiTableDataSource = new ApiTableDataSource();
  getTableDataParam: GetTableDataParam = {
    page: 1,
    pageLength: 20,
    //fields: ["nom_produit", "is_new_produit"],
    // search: { Key: "", "Value":["nomProduit","statutProduit"]},
     filters: [{ Key: "Status.Text", Value:"PAYED_NOT_EXPIRED"}]
  } as GetTableDataParam; 
  imagePath: any = environment.api_host + environment.api_file_image;
  showLoading: Boolean = true;
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
  updateData() {
    this.loadingService.emitChange(true);
    this.annonceService.getAll(this.getTableDataParam).subscribe((annonces: HttpResponse<Datatable<Array<Annonce>>>) => {
      this.annoncesList = annonces.body.data;
      this.source.setPaging(0, annonces.body.total, true);
      this.source.setTotal(annonces.body.total);
      this.loadingService.emitChange(false);
      this.showLoading = false;
    }, (error: Error) => {
      this.loadingService.emitChange(false);
    });
  }

}
