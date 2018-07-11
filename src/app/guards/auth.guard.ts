import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AuthInfo } from '../services/authinfo';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authInfo$.pipe(
      map(authInfo => {
        console.log(authInfo);
        return authInfo.isLoggedIn();
      }),
      take(1),
      tap(allowed => {
        console.log(allowed);
        if (allowed) {
          this.router.navigate(['/'])
          return false;
        } else {
          console.log('do google login')
          this.authService.doGoogleLogin();
          return true;
        }
      }), );
  }
}
