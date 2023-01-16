import { createReducer, on } from "@ngrx/store";

import * as AuthActions from '../+store/auth.actions';
import { User } from "../user.model";

export interface State {
  user: User | null,
  token: string;
}

const initialState: State = {
  user: null,
  token: ''
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.authenticateSuccess, (state, { payload }) => {
    const user = new User(payload.email, payload.username, payload.userId, payload.accessToken, new Date(payload.expiresIn));
    
    return {
      ...state,
      user: user,
      token: payload.accessToken
    };
  }),

  on(AuthActions.logoutEnd, (state) => {
    return {
      ...state,
      user: null,
      token: ''
    };
  })
);