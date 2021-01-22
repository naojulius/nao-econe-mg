import { Component, OnInit } from '@angular/core';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';

@Component({
  selector: 'app-new-vente',
  templateUrl: './new-vente.component.html',
  styleUrls: ['./new-vente.component.css']
})
export class NewVenteComponent implements OnInit {

  constructor(
    private loadingService: LocalLoadingService
  ) { }
    date: Date;
  ngOnInit(): void {
    this.loadingService.emitChange(false);
  }

}
