import { createAction } from "@ngrx/store";

export const loadStart = createAction('[App State] Start Loading')
export const loadEnd = createAction('[App State] Stop Loading')