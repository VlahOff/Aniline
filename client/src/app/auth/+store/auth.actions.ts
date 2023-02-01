import { createAction, props } from "@ngrx/store";

export const signupStart = createAction(
  '[Auth] Signup Start',
  props<{
    payload: { email: string, username: string, password: string; };
  }>()
);

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{
    payload: { email: string, password: string; };
  }>()
);

export const authenticateSuccess = createAction(
  '[Auth] Authentication Success',
  props<{
    payload: {
      userId: string,
      email: string,
      username: string,
      accessToken: string,
      expiresIn: Date,
      redirect: boolean;
    };
  }>()
);

export const authenticateFail = createAction(
  '[Auth] Authenticate Fail',
  props<{ payload: string; }>()
);

export const logoutStart = createAction('[Auth] Logout');

export const logoutEnd = createAction('[Auth] Logout End');

export const clearError = createAction('[Auth] Clear Error');

export const autoLogin = createAction('[Auth] Auto Login');

export const toggleChangeUsernameModal = createAction('[Auth] Toggle Change Username Modal');

export const toggleChangePasswordModal = createAction('[Auth] Toggle Change Password Modal');

export const sendChangeUsernameData = createAction(
  '[Auth] Send Change Username Form',
  props<{
    payload: {
      newUsername: string,
      password: string;
    };
  }>()
);

export const setNewUsername = createAction(
  '[Auth] Set New Username',
  props<{ payload: string; }>()
);

export const sendChangePasswordData = createAction(
  '[Auth] Send Change Password Form',
  props<{
    payload: {
      oldPassword: string,
      newPassword: string,
    };
  }>()
);

export const sendDeleteAccountRequest = createAction(
  '[Auth] Send A Delete Account Request',
  props<{ payload: string; }>()
);

export const toggleDeleteUserModal = createAction('[Auth] Toggle Delete User Modal');

export const closeAllModals = createAction('[Auth] Close All Modals');

export const dummy = createAction('[Auth] Dummy Action');