import {createSlice} from '@reduxjs/toolkit'
import {req} from 'app/requests'
import {Errors} from 'app/errors'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
  isLoading: false,
  user: {},
}

export const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSubmitted: state => ({...state, isLoading: true}),
    logout: state => ({...state, isAuthenticated: false, user: {}}),
    authError: state => ({...state, isLoading: false, isAuthenticated: false}),
    authSuccess: (state, action) => 
      ({...state, user: action.payload.user, isAuthenticated: true, isLoading: false})
  }
})


// Logic
const getToken = getState => getState().auth.token
const setSuccess = res => dispatch => {
  dispatch(Auth.actions.authSuccess(res))
  dispatch(Errors.actions.success())
}
const setError = err => dispatch => {
  dispatch(Auth.actions.authError(err))
  dispatch(Errors.actions.error(err))
}

// Thunks
export const logoutUser = () => dispatch => {
  dispatch(Auth.actions.logout())
  localStorage.removeItem('token')
}
export const submitAuthForm = (user, url = '') => async (dispatch, getState) => {
  dispatch(Auth.actions.setSubmitted())
  await req.postJSON(`/api/${url}`, getToken(getState), user)
    .then(res => {
      dispatch(setSuccess(res.data))
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => dispatch(setError(err.response)))
  return
}

// Export the slice
export default Auth