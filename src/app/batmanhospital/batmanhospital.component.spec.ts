import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmanhospitalComponent } from './batmanhospital.component';

describe('BatmanhospitalComponent', () => {
  let component: BatmanhospitalComponent;
  let fixture: ComponentFixture<BatmanhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatmanhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatmanhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
