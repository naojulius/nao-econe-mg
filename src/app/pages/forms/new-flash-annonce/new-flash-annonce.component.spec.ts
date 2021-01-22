import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlashAnnonceComponent } from './new-flash-annonce.component';

describe('NewFlashAnnonceComponent', () => {
  let component: NewFlashAnnonceComponent;
  let fixture: ComponentFixture<NewFlashAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFlashAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFlashAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
