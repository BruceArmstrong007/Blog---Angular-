import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmiting: false,
  currentUser: null,
  validationError: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmiting: true,
      validationError: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmiting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmiting: false,
      validationError: action.errors,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
