import {ATypes} from 'app/actionTypes'

  
const initialState = {
  status: null,
  message: '',
  redirect: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ATypes.POST_ERROR:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.data.msg,
      }
    case ATypes.VALIDATION_ERROR:
      return {
        ...state,
        status: 400,
        message: action.payload.msg,
      }
    case ATypes.CLEAR_ERRORS:
      return {
        ...state,
        status: null,
        message: '',
      }
    case ATypes.LOGIN_SUCCESS:
    case ATypes.REGISTRY_SUCCESS:
      return {
        status: 200,
        messgae: 'success',
        redirect: true,
      }
    default:
      return state;
  }
}