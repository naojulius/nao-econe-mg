import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploieTabComponent } from './emploie-tab.component';

describe('EmploieTabComponent', () => {
  let component: EmploieTabComponent;
  let fixture: ComponentFixture<EmploieTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploieTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploieTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
