import {
  InfoLevel,
  LogoType,
  RightPanelInformationModel,
} from 'src/shared/right-panel-information-detail/right-panel-information.model'

export const RIGHT_PANEL_COMPETENCE_INFORMATIONS_DATA: RightPanelInformationModel[] = [
  {
    logo: LogoType.html,
    level: InfoLevel.expert,
    title: 'HTML 5',
    description: 'Accessibilité / référencement',
  },
]

export const RIGHT_PANEL_LOGO: Record<string, string> = {
  HTML: ''
}
