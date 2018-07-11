import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
import { Observable } from '../../../../node_modules/rxjs';
import { AuthService } from '../../services/auth.service';
import { take, map, switchMap } from '../../../../node_modules/rxjs/operators';
import { AuthInfo } from '../../services/authinfo';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {
  user: AuthInfo;

  constructor(private auth: AngularFireAuth, private authService: AuthService) { }

  ngOnInit() {
    this.authService.authInfo$.subscribe(p => {
      this.user = p;
    })
  }

}
