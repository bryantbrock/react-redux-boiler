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
      return {
        ...state,
        isLoading: true,
      }
    case ATypes.REGISTRY_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      }
    case ATypes.REGISTRY_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      }
    default:
      return state;
  }
}