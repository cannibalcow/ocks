import { ActionReducerMap } from "../../../node_modules/@ngrx/store";
import * as fromKillReducer from './kill.reducer';

export interface State {
    appState: fromKillReducer.KillState
}

export const reducers: ActionReducerMap<State> = {
    appState: fromKillReducer.reducer
}