import { Component, OnInit, Injectable } from '@angular/core';
import { KillState } from './store/kill.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { DoneLoginAction, CheckLoggedInAction } from './store/kill.actions';
import { map } from '../../node_modules/rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {

  show: boolean = false;

  constructor(private store: Store<KillState>) {

  }
  toggleCollapse() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.store.dispatch(new CheckLoggedInAction());
  }
}
