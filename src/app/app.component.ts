import { ChangeDetectorRef, Component } from '@angular/core';
import { LocalLoadingService } from './@core/service/local-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: Boolean = true;
  title = 'econe-mg';
  constructor(
    private loadingService: LocalLoadingService,
    private cdr: ChangeDetectorRef
  ) {
    this.loadingService.changeEmitted$.subscribe(state => {
      this.loading = state;
      this.cdr.detectChanges();
    })
  }
}
