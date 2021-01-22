import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RencontreTabComponent } from './rencontre-tab.component';

describe('RencontreTabComponent', () => {
  let component: RencontreTabComponent;
  let fixture: ComponentFixture<RencontreTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RencontreTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RencontreTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
