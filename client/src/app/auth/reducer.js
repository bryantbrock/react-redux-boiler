import {ATypes} from 'app/actionTypes'

  
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ATypes.REGISTRY_SUBMITTED:
    case ATypes.LOGIN_SUBMITTED:
      return {
        ...state,
        isLoading: true,
      }
    case ATypes.REGISTRY_SUCCESS:
    case ATypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      }
    case ATypes.REGISTRY_FAILED:
    case ATypes.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      }
    default:
      return state;
  }
}