import {ATypes} from 'app/actionTypes'

export const throwErr = msg => dispatch => {
  return dispatch({type: ATypes.VALIDATION_ERROR, payload: {msg}})
}

export const clearErrors = () => dispatch => {
  return dispatch({type: ATypes.CLEAR_ERRORS})
}