import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploieDetailsComponent } from './emploie-details.component';

describe('EmploieDetailsComponent', () => {
  let component: EmploieDetailsComponent;
  let fixture: ComponentFixture<EmploieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
