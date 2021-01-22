import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRencontreComponent } from './new-rencontre.component';

describe('NewRencontreComponent', () => {
  let component: NewRencontreComponent;
  let fixture: ComponentFixture<NewRencontreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRencontreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
