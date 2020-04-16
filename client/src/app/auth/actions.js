import {req} from 'app/requests'
import {ATypes} from 'app/actionTypes'

const getToken = getState => getState().auth.token

export const register = user => async (dispatch, getState) => {
  dispatch({type: ATypes.REGISTRY_SUBMITTED})
  await req.postJSON('/api/auth/sign-up', getToken(getState), user)
    .then(res => dispatch({type: ATypes.REGISTRY_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ATypes.POST_ERROR, payload: err.response}))
  return
}

export const login = user => async (dispatch, getState) => {
  dispatch({type: ATypes.LOGIN_SUBMITTED})
  await req.postJSON('/api/auth/login', getToken(getState), user)
    .then(res => dispatch({type: ATypes.LOGIN_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ATypes.POST_ERROR, payload: err.response}))
  return
}