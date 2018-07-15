import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { CatAvatarComponent } from './components/cat-avatar/cat-avatar.component';
import { KillingFeedComponent } from './components/killing-feed/killing-feed.component';
import { KillingStatsComponent } from './components/killing-stats/killing-stats.component';
import { CatDescriptionComponent } from './components/cat-description/cat-description.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { StoreModule } from '@ngrx/store';
import * as reducer from './store';
import { EffectsModule } from '@ngrx/effects';
import { KillEffects } from './store/kill.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CatManagerComponent } from './components/cat-manager/cat-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    CatAvatarComponent,
    KillingFeedComponent,
    KillingStatsComponent,
    CatDescriptionComponent,
    LoginComponent,
    ErrorComponent,
    CatManagerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducer.reducers),
    EffectsModule.forRoot([KillEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
