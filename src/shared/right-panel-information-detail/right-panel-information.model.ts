export type RightPanelInformationModel = {
  logo: LogoType
  title: string
  description?: string
  level: InfoLevel
}

export enum InfoLevel {
  base = 'BASE',
  medium = 'MEDIUM',
  expert = 'EXPERT',
}

export enum LogoType {
  html = 'HTML',
  css = 'CSS',
  js = 'JS',
  php = 'PHP',
  java = 'JAVA',
  sass = 'SASS',
  mysql = 'MYSQL',
  angular = 'ANGULAR',
  jasmine = 'JASMINE',
  typescript = 'TYPESCRIPT',
  cypress = 'CYPRESS',
  wordpress = 'WORDPRESS',
  prestashop = 'PRESTASHOP',
  visual = 'VISUAL',
  netbeans = 'NETBEANS',
  intellij = 'INTELLIJ',
  lens = 'LENS',
  photoshop = 'PHOTOSHOP',
  effects = 'EFFECTS',
}
