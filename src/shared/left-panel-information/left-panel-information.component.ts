import { Component, Input, OnInit } from '@angular/core'
import { LeftPanelInformationModel } from './letf-panel-information.model'

@Component({
  selector: 'app-left-panel-information',
  templateUrl: './left-panel-information.component.html',
  styleUrls: ['./left-panel-information.component.scss'],
})
export class LeftPanelInformationComponent implements OnInit {
  @Input() public leftPanelInformation: LeftPanelInformationModel | undefined

  constructor() {}

  ngOnInit(): void {}
}
