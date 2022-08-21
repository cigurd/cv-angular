import { PersonnalInformation } from 'src/app/header-components/header-personnal-information/header-personnal-information.model'

export const PERSONNAL_INFORMATION_DATA: PersonnalInformation[] = [
  {
    firstName: 'Sylvain',
    lastName: 'GENEST',
    address: {
      icon: 'location_on',
      text1: '55 rue Franklin',
      text2: '42000 Saint-Etienne',
    },
    phone: {
      icon: 'phone_iphone',
      text1: '06.50.14.08.27',
    },
    mail: {
      icon: 'mail',
      text1: 'cigurd@live.fr',
    },
    identity: {
      icon: 'perm_contact_calendar',
      text1: '45 ans',
      text2: ' Marié - 2 enfants',
      text3: 'Permis B - Véhicule disponible',
    },
    linkedin: {
      icon: 'linkedin',
      text1: '/sylvain-genest-58429a191',
    },
  },
]
