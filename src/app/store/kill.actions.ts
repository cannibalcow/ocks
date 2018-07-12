import { Action } from '@ngrx/store';
import { RegisterKill } from '../domain/register-kill';
import { AuthInfo } from '../services/authinfo';

export const REGISTER_KILL = '[KILL] Register';
export const LOGIN_USER = '[USER] Login user';
export const DONE_LOGIN_USER = '[USER] Done Login User';
export const LOGOUT_USER = '[USER] Logout user';
export const DONE_LOGOUT_USER = '[USER] Done Logout user';
export const CHECK_LOGGED_IN = '[USER] Check logged in';

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

export type KillActions = RegisterKillAction | LoginUserAction | DoneLoginAction | LogoutUserAction | DoneLogoutUserAction | CheckLoggedInAction;