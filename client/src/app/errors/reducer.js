import {ATypes} from 'app/actionTypes'

  
const initialState = {
  status: null,
  message: '',
  id: null,
  fields: null,
  redirect: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ATypes.POST_ERROR:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.data.msg,
        id: action.payload.data.id,
        fields: action.payload.data.fields,
      }
    case ATypes.VALIDATION_ERROR:
      return {
        ...state,
        status: 400,
        message: action.payload.msg,
        id: action.payload.data.id,
        fields: action.payload.data.fields,
      }
    case ATypes.CLEAR_ERRORS:
      return {
        ...state,
        status: null,
        message: '',
        id: null,
        fields: null,
      }
    case ATypes.LOGIN_SUCCESS:
    case ATypes.REGISTRY_SUCCESS:
      return {
        status: 200,
        messgae: 'success',
        redirect: true,
        id: 0,
        fields: null,
      }
    default:
      return state;
  }
}