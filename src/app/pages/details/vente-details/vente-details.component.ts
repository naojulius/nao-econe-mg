import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionConfig } from 'src/app/@core/entity/action-config';
import { Annonce } from 'src/app/@core/entity/annonce/annonce';
import { Vente } from 'src/app/@core/entity/vente/vente';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vente-details',
  templateUrl: './vente-details.component.html',
  styleUrls: ['./vente-details.component.css']
})
export class VenteDetailsComponent implements OnInit {

  constructor(private loadingService: LocalLoadingService, private activatedRouter: ActivatedRoute, private router: Router) { }
  actionConfigs: Array<ActionConfig> = new Array<ActionConfig>();
  vente: Vente = new Vente();
  private state$: Observable<Annonce>;
  imagePath: any = environment.api_host + environment.api_file_image;
  ngOnInit(): void {
    this.state$ = this.activatedRouter.paramMap.pipe(map(() => window.history.state))
    this.state$.subscribe(data => {
      if (data['data']) {
        this.vente = data['data'];
        this.loadingService.emitChange(false);
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

  ngAfterViewInit() {
    // Starting ngx-drag-scroll from specified index(3)
    // setTimeout(() => {
    //   this.ds.moveTo(3);
    // }, 0);
  }

}
