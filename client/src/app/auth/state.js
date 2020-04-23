import {createReducer, createAction} from '@reduxjs/toolkit'
import {req} from 'app/requests'
import {logout} from  'app/dashboard/state'
  
// Setup
const getToken = getState => getState().auth.token
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: {},
}

// Actions
export const setSubmitted = createAction('FORM_SUBMITTED')
export const success = createAction('SUCCESS')
export const error = createAction('ERROR')

// Thunks
export const submitAuthForm = (user, url = '') => async (dispatch, getState) => {
  dispatch(setSubmitted)
  await req.postJSON(`/api/${url}`, getToken(getState), user)
    .then(res => dispatch(success(res.data)))
    .catch(err => dispatch(error(err.response)))
  return
}

// Reducer
const reducer = createReducer(initialState, {
  [setSubmitted]: state => ({...state, isLoading: true}),
  [logout]: state => {
    localStorage.removeItem('token')
    return {
      ...state,
      isAuthenticated: false,
      user: {},
    }
  },
  [error]: state => ({...state, isLoading: false, isAuthenticated: false}),
  [success]: (state, action) => {
    localStorage.setItem('token', action.payload.token)
    return {...state, user: action.payload.user, isAuthenticated: true, isLoading: false}
  },
})

export default reducer