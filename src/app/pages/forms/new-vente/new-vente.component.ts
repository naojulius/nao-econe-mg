import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PickList } from 'src/app/@core/entity/picklist/picklist';
import { Status } from 'src/app/@core/entity/status/status';
import { User } from 'src/app/@core/entity/User/user';
import { Vente } from 'src/app/@core/entity/vente/vente';
import { VenteReq } from 'src/app/@core/entity/vente/vente-req';
import { StateEnum } from 'src/app/@core/enumeration/state-enum';
import { AuthService } from 'src/app/@core/service/auth.service';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { PickListService } from 'src/app/@core/service/picklist.service';
import { VenteService } from 'src/app/@core/service/vente.service';

@Component({
  selector: 'app-new-vente',
  templateUrl: './new-vente.component.html',
  styleUrls: ['./new-vente.component.css']
})
export class NewVenteComponent implements OnInit {

  constructor(
    private loadingService: LocalLoadingService, 
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private venteService: VenteService,
    private pickListService: PickListService,
    private toastrService: ToastrService,
    ) { }
  email: string = "";
  password: string = "";




  venteTitle: string = '';
  venteSubTitle: string = '';
  venteCategory: string = '';
  venteMarque: string = '';
  venteDescription: string = '';
  ventePrice: string = "";
  venteForm = {};
  vente: Vente = new Vente();
  category: PickList = new PickList();
  categoryArray: Array<PickList> = [];
  owner: User = new User();
  status: Status = new Status();
  topVentes: Vente[];
  userId: string = "";
  public allowCustom = true;
  selectedCategory: string;
  uploadForm: FormGroup;
  venteReq: VenteReq = new VenteReq();
  imageSuggestionLabel1: string = '';
  imageSuggestionLabel2: string = '';
  imageSuggestionLabel3: string = '';
  imageSuggestionLabel4: string = '';
  ngOnInit(): void {
    this.owner.id = this.authService.getUserParam('id');
    this.loadingService.emitChange(false);
    this.uploadForm  =this.formBuilder.group({
      venteImage1 : [''],
      venteImage2 : [''],
      venteImage3 : [''],   
      venteImage4 : [''],    
    });
    this.pickListService.getCategory().subscribe((categories: HttpResponse<Array<PickList>>)=>{
      this.categoryArray = categories.body;
    })
  }
  save(){
    this.status.text = StateEnum.PAYED_NOT_EXPIRED;
    this.vente.title = this.venteTitle;
    this.vente.marque = this.venteMarque;
    this.vente.description = this.venteDescription;
    this.vente.price = Number(this.ventePrice);
    this.category.id = this.venteCategory;
    this.vente.subTitle = this.venteSubTitle;

    let formData = new FormData();
    formData.append('venteimage1', this.uploadForm.get('venteImage1').value);
    formData.append('venteimage2', this.uploadForm.get('venteImage2').value);
    formData.append('venteimage3', this.uploadForm.get('venteImage3').value);
    formData.append('venteimage4', this.uploadForm.get('venteImage4').value);

    formData.append('vente', JSON.stringify(this.vente) as any);
    formData.append('status', JSON.stringify(this.status) as any);
    formData.append('owner', JSON.stringify(this.owner) as any);
    formData.append('category', JSON.stringify(this.category) as any);
    this.venteService.newVente(formData).subscribe((response: HttpResponse<string>)=>{
      if(response.status == 200){
        this.toastrService.success('Succès!', 'Sauvegardée avec succès.');
        // this.localNotificationService.showSuccessNotif(5,response.body ,true,false);
        window.location.href = this.router.url;
      }else{
        // this.localNotificationService.showErrorNotif(5,response.body ,true,false);
        window.location.href = this.router.url;
      }
    });
  }

  content:string = '';
  f = {};
  onFile1Selected(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imageSuggestionLabel1 = file.name;
      this.uploadForm.get('venteImage1').setValue(file);
    }else{
      alert("vous dever selectionner un fichier");
    }
  }

  onFile2Selected(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imageSuggestionLabel2 = file.name;
      this.uploadForm.get('venteImage2').setValue(file);
    }else{
      alert("vous dever selectionner un fichier");
    }
  }

  onFile3Selected(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imageSuggestionLabel3 = file.name;
      this.uploadForm.get('venteImage3').setValue(file);
    }else{
      alert("vous dever selectionner un fichier");
    }
  }

  onFile4Selected(event){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imageSuggestionLabel4 = file.name;
      this.uploadForm.get('venteImage4').setValue(file);
    }else{
      alert("vous dever selectionner un fichier");
    }
  }

}
