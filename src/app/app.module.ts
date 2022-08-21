import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LeftPanelInformationComponent } from 'src/shared/left-panel-information/left-panel-information.component'
import { PersonnalInformationDetailComponent } from 'src/shared/personnal-information-detail/personnal-information-detail.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderPersonnalInformationComponent } from './header-components/header-personnal-information/header-personnal-information.component'
import { RightPanelInformationDetailComponent } from 'src/shared/right-panel-information-detail/right-panel-information-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderPersonnalInformationComponent,
    PersonnalInformationDetailComponent,
    LeftPanelInformationComponent,
    RightPanelInformationDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
