import { Component, Input, OnInit } from '@angular/core'
import { RightPanelInformationModel } from './right-panel-information.model'

@Component({
  selector: 'app-right-panel-information-detail',
  templateUrl: './right-panel-information-detail.component.html',
  styleUrls: ['./right-panel-information-detail.component.scss'],
})
export class RightPanelInformationDetailComponent implements OnInit {
  @Input() public rightPanelInformation: RightPanelInformationModel | undefined

  constructor() {}

  ngOnInit(): void {}

  public getLogo(): string {
    return this.rightPanelInformation ? this.rightPanelInformation.logo : ''
  }
}
