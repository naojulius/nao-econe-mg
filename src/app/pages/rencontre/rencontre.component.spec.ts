import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RencontreComponent } from './rencontre.component';

describe('RencontreComponent', () => {
  let component: RencontreComponent;
  let fixture: ComponentFixture<RencontreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RencontreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
