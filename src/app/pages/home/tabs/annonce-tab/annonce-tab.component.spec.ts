import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceTabComponent } from './annonce-tab.component';

describe('AnnonceTabComponent', () => {
  let component: AnnonceTabComponent;
  let fixture: ComponentFixture<AnnonceTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
