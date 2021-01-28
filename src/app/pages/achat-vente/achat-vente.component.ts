import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiTableDataSource } from 'src/app/@core/entity/datatable/api-data-table-source';
import { Datatable } from 'src/app/@core/entity/datatable/data-table';
import { GetTableDataParam } from 'src/app/@core/entity/datatable/get-table-data-param';
import { PickList } from 'src/app/@core/entity/picklist/picklist';
import { Vente } from 'src/app/@core/entity/vente/vente';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { PickListService } from 'src/app/@core/service/picklist.service';
import { VenteService } from 'src/app/@core/service/vente.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-achat-vente',
  templateUrl: './achat-vente.component.html',
  styleUrls: ['./achat-vente.component.css']
})
export class AchatVenteComponent implements OnInit {

  constructor(
    private loadingService: LocalLoadingService, 
    private pickListService: PickListService,
      private venteService: VenteService
    ) { }
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
  showLoading: Boolean = true;
  ngOnInit(): void {
    this.pickListService.getCategory().subscribe((pickList: HttpResponse<Array<PickList>>)=>{
      this.category = pickList.body;
      this.loadingService.emitChange(false);
      console.log(this.category);
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
    this.venteService.getAll(this.getTableDataParam).subscribe((ventes: HttpResponse<Datatable<Array<Vente>>>) => {
      this.venteList = ventes.body.data;
      this.source.setPaging(0, ventes.body.total, true);
      this.source.setTotal(ventes.body.total);
      this.loadingService.emitChange(false);
      this.showLoading = false;
    }, (error: Error) => {
      this.loadingService.emitChange(false);
    });
  }

}
