import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";

import * as AuthActions from '../+store/auth.actions';
import { User } from "../user.model";

export interface State {
  user: User | null,
  error: string | null,
  loading: boolean;
}

const initialState: State = {
  user: null,
  error: null,
  loading: false
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.loginStart,
    AuthActions.signupStart, (state) => {
      return {
        ...state,
        error: null,
        loading: true
      };
    }),

  on(AuthActions.authenticateSuccess, (state, { payload }) => {
    const user = new User(payload.email, payload.username, payload.userId, payload.accessToken, new Date(payload.expiresIn));
    return {
      ...state,
      user: user,
      error: null,
      loading: false
    };
  }),

  on(AuthActions.authenticateFail, (state, { payload }) => {
    return {
      ...state,
      user: null,
      error: payload,
      loading: false
    };
  }),

  on(AuthActions.logout, (state) => {
    return {
      ...state,
      user: null,
      error: null,
      loading: false
    };
  }),

  on(AuthActions.clearError, (state) => {
    return {
      ...state,
      error: null,
      loading: false
    };
  })
);