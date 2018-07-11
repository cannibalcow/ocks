import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthInfo } from './authinfo';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static UNKNOWN_USER = new AuthInfo(null);
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

  constructor(public afAuth: AngularFireAuth) { }

  doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile')
    provider.addScope('email');

    this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        console.log('res', res);
        console.log('auth', this.afAuth.auth.currentUser);
        const authInfo = new AuthInfo(this.afAuth.auth.currentUser.uid);
        this.authInfo$.next(authInfo);
      })
      .catch(error => {
        console.log('error', error);
      }
    // return new Promise<any>((resolve, reject) => {
    //   const provider = new firebase.auth.GoogleAuthProvider();

    //   provider.addScope('profile')
    //   provider.addScope('email');

    //   this.afAuth.auth
    //     .signInWithPopup(provider)
    //     .then(res => {
    //       const authInfo = new AuthInfo(this.afAuth.auth.currentUser.uid);
    //       this.authInfo$.next(authInfo);
    //       subject
    //       resolve(res);
    //     })
    // });
  }
}
