import { Component, Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';
import { AuthInfo } from './services/authinfo';
import { DoneLoginAction } from './store/kill.actions';
import { KillState } from './store/kill.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  ngAfterContentInit(): void {

  }

  show: boolean = false;

  constructor(private afAuth: AngularFireAuth, private store: Store<KillState>) {
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new DoneLoginAction(new AuthInfo(user.uid, user.displayName, user.photoURL)));
      }
    })
  }
}
