import { Injectable } from "@angular/core";
import { Observable, merge } from "rxjs";
import { KillActions, LOGIN_USER, DoneLoginAction, LOGOUT_USER, DoneLogoutUserAction, CHECK_LOGGED_IN, LoadUserCats, LOAD_USER_CATS, DoneLoadingUserCats } from "./kill.actions";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, first, map, take, tap, switchMap } from "../../../node_modules/rxjs/operators";
import { AuthService } from "../services/auth.service";
import { Action } from "../../../node_modules/@ngrx/store";
import { AuthInfo } from "../services/authinfo";
import { CatService } from "../services/cat.service";

@Injectable()
export class KillEffects {

    constructor(private actions: Actions, private authService: AuthService, private catService: CatService) {
    }

    @Effect()
    startLogin: Observable<KillActions> = this.actions.pipe(
        ofType(LOGIN_USER),
        mergeMap<Action, KillActions>(action =>
            this.authService.doGoogleLogin().pipe(
                map(authInfo => new DoneLoginAction(authInfo))
            )
        )
    );

    @Effect()
    logoutUser: Observable<KillActions> = this.actions.pipe(
        ofType(LOGOUT_USER),
        mergeMap<Action, KillActions>(action => this.authService.logoutUser().pipe(map(() => new DoneLogoutUserAction())))
    );

    @Effect()
    checkLoggedIn: Observable<KillActions> = this.actions.pipe(
        ofType(CHECK_LOGGED_IN),
        mergeMap<Action, KillActions>(() => this.authService.getCurrentUser().pipe(map(auth => new DoneLoginAction(auth))))
    );

    @Effect()
    loadUserCats: Observable<KillActions> = this.actions.pipe(
        ofType(LOAD_USER_CATS),
        switchMap(() => this.catService.fetchUserCats().valueChanges().pipe(
            map(cats => new DoneLoadingUserCats(cats))
        ))
    );
}