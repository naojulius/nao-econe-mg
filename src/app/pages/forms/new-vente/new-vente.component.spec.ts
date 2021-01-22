import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVenteComponent } from './new-vente.component';

describe('NewVenteComponent', () => {
  let component: NewVenteComponent;
  let fixture: ComponentFixture<NewVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
