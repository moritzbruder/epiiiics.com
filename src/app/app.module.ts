import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EpicTitleComponent } from './components/epic-title/epic-title.component';
import { StructureGuideComponent } from './components/structure-guide/structure-guide.component';
import { EpicDescriptionComponent } from './components/epic-description/epic-description.component';
import { EpicLinkComponent } from './components/epic-link/epic-link.component';
import { BaseEpicComponent } from './components/base-epic-component.component';
import {MarkdownModule} from 'ngx-markdown';
import { EpicGoalsOkrsComponent } from './components/epic-goals/epic-goals-okrs/epic-goals-okrs.component';
import { EpicImagesComponent } from './components/epic-images/epic-images.component';
import {RouterModule, Routes} from '@angular/router';
import { RouterComponent } from './router/router.component';
import {SimplemdeModule} from 'ngx-simplemde';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {AngularFireAnalyticsModule, COLLECTION_ENABLED, CONFIG} from '@angular/fire/analytics';

const routes: Routes = [
  { path: 'imprint', component: StructureGuideComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: ':epicId', component: AppComponent },
  { path: '', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EpicTitleComponent,
    StructureGuideComponent,
    EpicDescriptionComponent,
    EpicLinkComponent,
    BaseEpicComponent,
    EpicGoalsOkrsComponent,
    EpicImagesComponent,
    RouterComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    CrystalLightboxModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(routes),
    SimplemdeModule.forRoot({
      options: {
        autosave: { enabled: true, uniqueId: 'MyUniqueID' },
      },
    }),
    FormsModule
  ],
  providers: [
    Title,
    { provide: COLLECTION_ENABLED, useValue: false },
  ],
  bootstrap: [RouterComponent]
})
export class AppModule { }
