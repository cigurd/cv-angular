export type PersonnalInformation = {
  firstName: string
  lastName: string
  address: PersonnalInformationModel
  phone: PersonnalInformationModel
  mail: PersonnalInformationModel
  identity: PersonnalInformationModel
  linkedin: PersonnalInformationModel
}

export type PersonnalInformationModel = {
  icon: string
  text1: string
  text2?: string
  text3?: string
}
