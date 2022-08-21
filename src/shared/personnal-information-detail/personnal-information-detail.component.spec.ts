import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalInformationDetailComponent } from './personnal-information-detail.component';

describe('PersonnalInformationDetailComponent', () => {
  let component: PersonnalInformationDetailComponent;
  let fixture: ComponentFixture<PersonnalInformationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalInformationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnalInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
