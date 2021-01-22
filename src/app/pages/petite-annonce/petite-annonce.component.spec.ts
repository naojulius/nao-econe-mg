import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteAnnonceComponent } from './petite-annonce.component';

describe('PetiteAnnonceComponent', () => {
  let component: PetiteAnnonceComponent;
  let fixture: ComponentFixture<PetiteAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetiteAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetiteAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
