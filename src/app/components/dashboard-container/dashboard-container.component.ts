import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription, Observable } from 'rxjs';
import { RegisterKill } from '../../domain/register-kill';
import { AuthService } from '../../services/auth.service';
import { AuthInfo } from '../../services/authinfo';
import { LoginUserAction, LogoutUserAction, RegisterKillAction } from '../../store/kill.actions';
import { KillState } from '../../store/kill.reducer';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../domain';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {

  user: AuthInfo;
  userSub: Subscription = null;
  cats: Observable<Cat[]>;
  constructor(private auth: AngularFireAuth, private authService: AuthService, private store: Store<KillState>, private catService: CatService) { }

  ngOnInit() {
    this.userSub = this.store.select('appState', 'user').subscribe(auth => this.user = auth);
    this.cats = this.catService.fetchUserCats().valueChanges();
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  login() {
    this.store.dispatch(new LoginUserAction());
  }

  logout() {
    this.store.dispatch(new LogoutUserAction());
  }


  addCat() {
    this.catService.addUserCat('Mo');
  }
}
