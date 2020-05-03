import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatwomanhospitalComponent } from './catwomanhospital.component';

describe('CatwomanhospitalComponent', () => {
  let component: CatwomanhospitalComponent;
  let fixture: ComponentFixture<CatwomanhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatwomanhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatwomanhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
