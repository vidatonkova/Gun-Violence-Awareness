import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolenWeaponComponent } from './stolen-weapon.component';

describe('StolenWeaponComponent', () => {
  let component: StolenWeaponComponent;
  let fixture: ComponentFixture<StolenWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolenWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolenWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
