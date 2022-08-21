import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LeftPanelInformationComponent } from './left-panel-information.component'

describe('LeftpanelInformationComponent', () => {
  let component: LeftPanelInformationComponent
  let fixture: ComponentFixture<LeftPanelInformationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftPanelInformationComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LeftPanelInformationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
