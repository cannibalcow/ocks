import { Action } from '@ngrx/store';
import { Kill } from '../domain';

export enum KillActionType {
    REGISTER_KILL = '[KILL] Register'
}

export class RegisterKillAction implements Action {
    readonly type = KillActionType.REGISTER_KILL;

    constructor(public catId: string, public kill: Kill) {
    }
}

export type KillActions = RegisterKillAction;