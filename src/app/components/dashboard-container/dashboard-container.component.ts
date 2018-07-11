import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
import { Observable, pipe } from '../../../../node_modules/rxjs';
import { Cat } from '../../domain';
import { AuthService } from '../../services/auth.service';
import { KillState } from '../../store/kill.reducer';
import { RegisterKillAction } from '../../store/kill.actions';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {
  state: KillState;
  cats: Observable<Cat[]>;

  constructor(private auth: AngularFireAuth, private authService: AuthService, private store: Store<KillState>) { }

  ngOnInit() {
    this.store.subscribe(p => this.state = p);
    // this.cats = this.store.pipe(select('reducer.cats'));
    this.cats = this.store.select(state => {
      console.log(state)
      return state.cats
    });
  }

  derp() {
    this.store.dispatch(new RegisterKillAction('123', { type: 'sotr', date: new Date() }));
  }
}
