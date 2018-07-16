import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from "rxjs";
import { Action } from "../../../node_modules/@ngrx/store";
import { map, mergeMap, switchMap, take } from "../../../node_modules/rxjs/operators";
import { Cat } from "../domain";
import { AuthService } from "../services/auth.service";
import { CatService } from "../services/cat.service";
import { CHECK_LOGGED_IN, CREATE_CAT, DoneCreatingCatAction, DoneLoadingUserCats, DoneLoginAction, DoneLogoutUserAction, KillActions, LOAD_USER_CATS, LOGIN_USER, LOGOUT_USER, CreateCatAction, DELETE_CAT, DeleteCatAction, LoadUserCats } from "./kill.actions";

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
            take(1),
            map(cats => new DoneLoadingUserCats(cats))
        ))
    );

    @Effect()
    createCat: Observable<KillActions> = this.actions.pipe(
        ofType(CREATE_CAT),
        switchMap((cat: CreateCatAction) => {
            console.log('effect cat', cat);

            return from(this.catService.addUserCat(cat.cat).then((doc: firebase.firestore.DocumentReference) => {
                return new DoneCreatingCatAction(cat.cat)
            }));
        })
    );

    @Effect()
    deleteCat: Observable<KillActions> = this.actions.pipe(
        ofType(DELETE_CAT),
        switchMap((action: DeleteCatAction) => {
            return this.catService.deleteCat(action.id).then(() => new LoadUserCats());
        })
    )
}