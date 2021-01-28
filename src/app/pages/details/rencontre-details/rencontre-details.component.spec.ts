import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RencontreDetailsComponent } from './rencontre-details.component';

describe('RencontreDetailsComponent', () => {
  let component: RencontreDetailsComponent;
  let fixture: ComponentFixture<RencontreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RencontreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RencontreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
