import { Component, Input, OnInit } from '@angular/core'
import { PersonnalInformationModel } from 'src/app/header-components/header-personnal-information/header-personnal-information.model'

@Component({
  selector: 'app-personnal-information-detail',
  templateUrl: './personnal-information-detail.component.html',
  styleUrls: ['./personnal-information-detail.component.scss'],
})
export class PersonnalInformationDetailComponent implements OnInit {
  @Input() public personnalInformationDetail:
    | PersonnalInformationModel
    | undefined

  constructor() {}

  ngOnInit(): void {}
}
