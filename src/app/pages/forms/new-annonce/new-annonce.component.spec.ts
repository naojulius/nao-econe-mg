import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnnonceComponent } from './new-annonce.component';

describe('NewAnnonceComponent', () => {
  let component: NewAnnonceComponent;
  let fixture: ComponentFixture<NewAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
