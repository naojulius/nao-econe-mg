import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ FooterComponent, NavBarComponent, LoaderComponent ],
  exports: [ FooterComponent, NavBarComponent, LoaderComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommonSharedModule {
}