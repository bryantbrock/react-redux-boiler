import {createAction, createReducer} from '@reduxjs/toolkit'
import {error, success} from 'app/auth/state'

// Setup
const initialState = {
  status: null,
  message: '',
  id: null,
  fields: null,
  redirect: false,
}

// Actions
export const clear = createAction('CLEAR_ERRORS')

// Thunks
export const clearErrors = () => dispatch => dispatch(clear())
 
// Reducer
const reducer = createReducer(initialState, {
  [error]: (state, action) => ({
    ...state,
    status: action.payload.status,
    message: action.payload.data.msg,
    id: action.payload.data.id,
    fields: action.payload.data.fields,
  }),
  [clear]: () => ({
    status: null,
    message: '',
    id: null,
    fields: null,
    redirect: false,
  }),
  [success]: (state, action) => ({
    status: 200,
    messgae: 'success',
    redirect: true,
    id: 0,
    fields: null,
  }),
})

export default reducer