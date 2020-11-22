import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassIncidentsComponent } from './mass-incidents.component';

describe('MassIncidentsComponent', () => {
  let component: MassIncidentsComponent;
  let fixture: ComponentFixture<MassIncidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassIncidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
