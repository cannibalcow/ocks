import { Cat } from "../domain";
import { AuthInfo } from "../services/authinfo";
import { DONE_LOGIN_USER, KillActions, LOGIN_USER, REGISTER_KILL, DONE_LOGOUT_USER } from "./kill.actions";

export interface KillState {
    user: AuthInfo
    cats: Cat[]
}

const initalState: KillState = {
    user: new AuthInfo(null),
    cats: [
        {
            id: '123', name: 'martha', ownerId: '12331'
        }
    ]
}

export function reducer(state = initalState, action: KillActions): KillState {
    console.log(action);
    switch (action.type) {
        case DONE_LOGIN_USER:
            return {
                ...state,
                user: action.authInfo
            }
        case REGISTER_KILL:
            return state;
        case DONE_LOGOUT_USER:
            return {
                ...state,
                user: new AuthInfo(null)
            }
        default:
            return state;
    }
}