import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionConfig } from 'src/app/@core/entity/action-config';
import { Annonce } from 'src/app/@core/entity/annonce/annonce';
import { Emploie } from 'src/app/@core/entity/emploie/emploie';
import { Vente } from 'src/app/@core/entity/vente/vente';
import { LocalLoadingService } from 'src/app/@core/service/local-loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-emploie-details',
  templateUrl: './emploie-details.component.html',
  styleUrls: ['./emploie-details.component.css']
})
export class EmploieDetailsComponent implements OnInit {

  constructor(private loadingService: LocalLoadingService, private activatedRouter: ActivatedRoute, private router: Router) { }

  actionConfigs: Array<ActionConfig> = new Array<ActionConfig>();
  vente: Vente = new Vente();
  private state$: Observable<Annonce>;
  job: Emploie = new Emploie();
  ngOnInit(): void {
    this.state$ = this.activatedRouter.paramMap.pipe(map(() => window.history.state))
    this.state$.subscribe(data => {
      if (data['data']) {
        this.job = data['data'];
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

}
