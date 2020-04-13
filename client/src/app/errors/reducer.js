import {ATypes} from 'app/actionTypes'

  
const initialState = {
  status: null,
  message: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ATypes.POST_ERROR:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.data.msg,
      }
    default:
      return state;
  }
}