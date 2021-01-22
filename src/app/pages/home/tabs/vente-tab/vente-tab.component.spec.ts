import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteTabComponent } from './vente-tab.component';

describe('VenteTabComponent', () => {
  let component: VenteTabComponent;
  let fixture: ComponentFixture<VenteTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
