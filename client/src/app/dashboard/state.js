import {createAction} from '@reduxjs/toolkit'

// Actions
export const logout = createAction('LOGOUT')

// Thunks
export const logoutUser = () => dispatch => dispatch(logout())