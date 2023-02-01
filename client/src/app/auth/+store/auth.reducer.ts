import { createReducer, on } from "@ngrx/store";

import * as AuthActions from '../+store/auth.actions';
import { User } from "../user.model";

export interface State {
  user: User | null;
  token: string;
  changeUsernameModal: boolean;
  changePasswordModal: boolean;
  deleteAccountModal: boolean;
}

const initialState: State = {
  user: null,
  token: '',
  changeUsernameModal: false,
  changePasswordModal: false,
  deleteAccountModal: true
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
  }),

  on(AuthActions.toggleChangeUsernameModal, (state) => {
    return {
      ...state,
      changeUsernameModal: !state.changeUsernameModal
    };
  }),

  on(AuthActions.toggleChangePasswordModal, (state) => {
    return {
      ...state,
      changePasswordModal: !state.changePasswordModal
    };
  }),

  on(AuthActions.toggleDeleteUserModal, (state) => {
    return {
      ...state,
      deleteAccountModal: !state.deleteAccountModal
    };
  }),

  on(AuthActions.closeAllModals, (state) => {
    return {
      ...state,
      changeUsernameModal: false,
      changePasswordModal: false,
      deleteAccountModal: false
    };
  }),

  on(AuthActions.setNewUsername, (state, { payload }) => {
    const newUser = Object.assign({}, state.user);
    newUser.username = payload;

    return {
      ...state,
      user: newUser
    };
  })
);