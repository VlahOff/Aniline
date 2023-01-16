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

export const dummy = createAction('[Auth] Dummy Action');