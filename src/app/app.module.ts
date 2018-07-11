import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { StoreModule } from '../../node_modules/@ngrx/store';
import * as reducer from './store';

@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    CatAvatarComponent,
    KillingFeedComponent,
    KillingStatsComponent,
    CatDescriptionComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducer.reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
