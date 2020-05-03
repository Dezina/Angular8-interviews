import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanhospitalComponent } from './supermanhospital.component';

describe('SupermanhospitalComponent', () => {
  let component: SupermanhospitalComponent;
  let fixture: ComponentFixture<SupermanhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermanhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermanhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
