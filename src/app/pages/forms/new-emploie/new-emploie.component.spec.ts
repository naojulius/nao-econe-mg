import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmploieComponent } from './new-emploie.component';

describe('NewEmploieComponent', () => {
  let component: NewEmploieComponent;
  let fixture: ComponentFixture<NewEmploieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmploieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
