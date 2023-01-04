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
  '[Auth] Authentication',
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

export const logout = createAction('[Auth] Logout',
  props<{ payload: string; }>());

export const clearError = createAction('[Auth] Clear Error');

export const autoLogin = createAction('[Auth] Auto Login');

export const dummy = createAction('[Auth] Dummy Action');