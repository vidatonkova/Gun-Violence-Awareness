import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateIncidentsComponent } from './state-incidents.component';

describe('StateIncidentsComponent', () => {
  let component: StateIncidentsComponent;
  let fixture: ComponentFixture<StateIncidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateIncidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
