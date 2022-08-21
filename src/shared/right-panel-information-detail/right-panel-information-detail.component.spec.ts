import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelInformationDetailComponent } from './right-panel-information-detail.component';

describe('RightPanelInformationDetailComponent', () => {
  let component: RightPanelInformationDetailComponent;
  let fixture: ComponentFixture<RightPanelInformationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightPanelInformationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightPanelInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
