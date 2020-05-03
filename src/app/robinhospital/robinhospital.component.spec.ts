import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinhospitalComponent } from './robinhospital.component';

describe('RobinhospitalComponent', () => {
  let component: RobinhospitalComponent;
  let fixture: ComponentFixture<RobinhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
