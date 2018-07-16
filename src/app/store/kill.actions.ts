import { Action } from '@ngrx/store';
import { RegisterKill } from '../domain/register-kill';
import { AuthInfo } from '../services/authinfo';
import { Cat } from '../domain';

export const REGISTER_KILL = '[KILL] Register';
export const LOGIN_USER = '[USER] Login user';
export const DONE_LOGIN_USER = '[USER] Done Login User';
export const LOGOUT_USER = '[USER] Logout user';
export const DONE_LOGOUT_USER = '[USER] Done Logout user';
export const CHECK_LOGGED_IN = '[USER] Check logged in';
export const LOAD_USER_CATS = '[USER CATS] Load user cats';
export const DONE_LOADING_USER_CATS = '[USER CATS] Done Loading User Cats';
export const CREATE_CAT = '[CAT] Create Cat';
export const DONE_CREATING_CAT = '[CAT] Done Creating cat';


export class RegisterKillAction implements Action {
    public readonly type = REGISTER_KILL;
    registerKill: RegisterKill;

    constructor(registerKill: RegisterKill) {
        this.registerKill = registerKill;
    }
}

export class LoginUserAction implements Action {
    public readonly type = LOGIN_USER;
    constructor() {
    }
}

export class DoneLoginAction implements Action {
    public readonly type = DONE_LOGIN_USER;
    authInfo: AuthInfo;

    constructor(payload: AuthInfo) {
        this.authInfo = payload;
    }
}

export class LogoutUserAction implements Action {
    public readonly type = LOGOUT_USER;
}

export class DoneLogoutUserAction implements Action {
    public readonly type = DONE_LOGOUT_USER;
}

export class CheckLoggedInAction implements Action {
    public readonly type = CHECK_LOGGED_IN;
}

export class LoadUserCats implements Action {
    public readonly type = LOAD_USER_CATS;
}

export class DoneLoadingUserCats implements Action {
    public readonly type = DONE_LOADING_USER_CATS;
    cats: Cat[];

    constructor(cats: Cat[]) {
        this.cats = cats;
    }
}

export class CreateCatAction implements Action {
    public readonly type = CREATE_CAT;
    cat: Cat;

    constructor(cat: Cat) {
        this.cat = cat;
    }
}

export class DoneCreatingCatAction implements Action {
    public readonly type = DONE_CREATING_CAT;
    cat: Cat;

    constructor(cat: Cat) {
        this.cat = cat;
    }
}

export type KillActions =
    RegisterKillAction
    | LoginUserAction
    | DoneLoginAction
    | LogoutUserAction
    | DoneLogoutUserAction
    | CheckLoggedInAction
    | LoadUserCats
    | DoneLoadingUserCats
    | CreateCatAction
    | DoneCreatingCatAction;