import { createAction, props } from "@ngrx/store";

export const loadStart = createAction('[App State] Start Loading');

export const loadEnd = createAction('[App State] Stop Loading');

export const setError = createAction(
  '[App State] Set Error',
  props<{ payload: string; }>()
);

export const clearError = createAction('[App State] Clear Error');