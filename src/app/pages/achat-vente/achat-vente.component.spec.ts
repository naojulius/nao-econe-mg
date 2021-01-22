import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatVenteComponent } from './achat-vente.component';

describe('AchatVenteComponent', () => {
  let component: AchatVenteComponent;
  let fixture: ComponentFixture<AchatVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
