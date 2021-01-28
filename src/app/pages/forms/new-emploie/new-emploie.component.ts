import { Component, OnInit } from '@angular/core';
import { Emploie } from 'src/app/@core/entity/emploie/emploie';
import { ContractEnum } from 'src/app/@core/Enumeration/contract-enum';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';

@Component({
  selector: 'app-new-emploie',
  templateUrl: './new-emploie.component.html',
  styleUrls: ['./new-emploie.component.css']
})
export class NewEmploieComponent implements OnInit {

  constructor(
    private loadingService: LocalLoadingService
  ) { }
  f = {};
  contracts = ContractEnum;
  contractKeys = Object.keys;
  
  job: Emploie = new Emploie();
  ngOnInit(): void {
    this.loadingService.emitChange(false);
  }

  save(){
    this.loadingService.emitChange(false);
  }

}
