import { createReducer, on } from "@ngrx/store";
import * as AppStateActions from './appState.actions';

export interface State {
  error: string[];
  notifications: string[];
  loading: boolean;
}

const initialState: State = {
  error: [],
  notifications: [],
  loading: false
};

export const appStateReducer = createReducer(
  initialState,

  on(AppStateActions.loadStart, (state) => {
    return {
      ...state,
      loading: true
    };
  }),

  on(AppStateActions.loadEnd, (state) => {
    return {
      ...state,
      loading: false
    };
  })
);