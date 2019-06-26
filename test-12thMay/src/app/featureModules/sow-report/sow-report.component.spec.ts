import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowReportComponent } from './sow-report.component';

describe('SowReportComponent', () => {
  let component: SowReportComponent;
  let fixture: ComponentFixture<SowReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
