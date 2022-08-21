import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPersonnalInformationComponent } from './header-personnal-information.component';

describe('HeaderPersonnalInformationComponent', () => {
  let component: HeaderPersonnalInformationComponent;
  let fixture: ComponentFixture<HeaderPersonnalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPersonnalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPersonnalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
