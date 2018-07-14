import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { from, Observable, of } from 'rxjs';
import { KillState } from '../store/kill.reducer';
import { AuthInfo } from './authinfo';
import * as killActions from '../store/kill.actions';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public afAuth: AngularFireAuth, public store: Store<KillState>) { }

  doGoogleLogin(): Observable<AuthInfo> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile')
    provider.addScope('email');

    let oauthinfo: Observable<AuthInfo> = null;

    if (this.isLoggedIn()) {
      return of(new AuthInfo(this.afAuth.auth.currentUser.uid, this.afAuth.auth.currentUser.displayName, this.afAuth.auth.currentUser.photoURL));
    } else {
      return from(this.afAuth.auth
        .signInWithPopup(provider)
        .then((ucred: firebase.auth.UserCredential) => {
          return new AuthInfo(this.afAuth.auth.currentUser.uid, this.afAuth.auth.currentUser.displayName, this.afAuth.auth.currentUser.photoURL);
        })
        .catch((error) => {
          console.error('mighty error', error)
          return new AuthInfo(null);
        })
      );
    }
  }

  isLoggedIn(): boolean {
    if (this.afAuth.auth.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser(): Observable<AuthInfo> {
    if (this.isLoggedIn()) {
      return of(new AuthInfo(this.afAuth.auth.currentUser.uid, this.afAuth.auth.currentUser.displayName, this.afAuth.auth.currentUser.photoURL));
    } else {
      return of(new AuthInfo(null));
    }
  }

  getUserId(): string {
    if (this.isLoggedIn()) {
      return this.afAuth.auth.currentUser.uid;
    } else {
      return null;
    }
  }

  logoutUser(): Observable<void> {
    return from(this.afAuth.auth.signOut());
  }
}
