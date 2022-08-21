import { Component, OnInit } from '@angular/core'
import {
  LEFT_PANEL_EXPERIENCE_INFORMATIONS_DATA,
  LEFT_PANEL_FORMATION_INFORMATIONS_DATA,
  LEFT_PANEL_HOBBI_INFORMATIONS_DATA,
} from 'src/data-cv/data-cv-left-panel-information/left-panel-information-data'
import { PERSONNAL_INFORMATION_DATA } from 'src/data-cv/data-cv-personnal-information/personnal-information-data'
import { RIGHT_PANEL_COMPETENCE_INFORMATIONS_DATA } from 'src/data-cv/data-cv-right-panel-information/right-panel-information-data'
import { LeftPanelInformationModel } from 'src/shared/left-panel-information/letf-panel-information.model'
import { RightPanelInformationModel } from 'src/shared/right-panel-information-detail/right-panel-information.model'
import { PersonnalInformation } from './header-personnal-information.model'

@Component({
  selector: 'app-header-personnal-information',
  templateUrl: './header-personnal-information.component.html',
  styleUrls: ['./header-personnal-information.component.scss'],
})
export class HeaderPersonnalInformationComponent implements OnInit {
  public personnalInformation: PersonnalInformation[] = []

  public leftPanelFormationInformations: LeftPanelInformationModel[] = []
  public leftPanelExperienceInformations: LeftPanelInformationModel[] = []
  public leftPanelHobbiInformations: LeftPanelInformationModel[] = []

  public rightPanelCompetenceInformation: RightPanelInformationModel[] = []

  constructor() {}

  ngOnInit(): void {
    this.initLeftPanel()
    this.initRightPanel()
  }

  private initRightPanel(): void {
    this.getRightPanelCompetenceInformations()
  }

  private initLeftPanel(): void {
    this.getPersonnalInformation()
    this.getLeftPanelFormationInformation()
    this.getLeftPanelExperienceInformation()
    this.getLeftPanelHobbiInformation()
  }

  private getPersonnalInformation(): void {
    PERSONNAL_INFORMATION_DATA.forEach((PI) => {
      this.personnalInformation.push(PI)
    })
  }
  private getLeftPanelFormationInformation(): void {
    LEFT_PANEL_FORMATION_INFORMATIONS_DATA.forEach((LPFI) => {
      this.leftPanelFormationInformations.push(LPFI)
    })
  }
  private getLeftPanelExperienceInformation(): void {
    LEFT_PANEL_EXPERIENCE_INFORMATIONS_DATA.forEach((LPEI) => {
      this.leftPanelExperienceInformations.push(LPEI)
    })
  }
  private getLeftPanelHobbiInformation(): void {
    LEFT_PANEL_HOBBI_INFORMATIONS_DATA.forEach((LPHI) => {
      this.leftPanelHobbiInformations.push(LPHI)
    })
  }

  private getRightPanelCompetenceInformations(): void {
    RIGHT_PANEL_COMPETENCE_INFORMATIONS_DATA.forEach((RPCI) => {
      this.rightPanelCompetenceInformation.push(RPCI)
    })
  }
}
