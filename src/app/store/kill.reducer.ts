import { Cat } from "../domain";
import { AuthInfo } from "../services/authinfo";
import { State, ActionReducerMap } from "../../../node_modules/@ngrx/store";
import { KillActions, KillActionType } from "./kill.actions";

export interface KillState {
    user: AuthInfo
    cats: Cat[]
}

const initalState: KillState = {
    user: null,
    cats: [
        {
            id: '123', name: 'Mo', birthday: new Date(), kills: []
        }
    ]
}

export function reducer(state = initalState, action: KillActions): KillState {
    console.log(action);
    switch (action.type) {
        case KillActionType.REGISTER_KILL:
            const index = state.cats.findIndex((cat: Cat) => cat.id == action.catId);
            const cat = state.cats[index];
            cat.kills.push(action.kill);

            return {
                ...state,
                state.cats[index] = cat
            }
        default: {
            return state;
        }
    }
}