import {req} from 'app/requests'
import {ATypes} from 'app/actionTypes'

const getToken = getState => getState().auth.token

export const registerUser = user => (dispatch, getState) => {
  dispatch({type: ATypes.REGISTRY_SUBMITTED})
  req.postJSON('/api/auth/sign-up', getToken(getState), user)
    .then(res => dispatch({type: ATypes.REGISTRY_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ATypes.POST_ERROR, payload: err.response}))
}

export const login = user => (dispatch, getState) => {
  dispatch({type: ATypes.LOGIN_SUBMITTED})
  req.postJSON('/api/auth/login', getToken(getState), user)
    .then(res => dispatch({type: ATypes.LOGIN_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ATypes.POST_ERROR, payload: err.response}))
}