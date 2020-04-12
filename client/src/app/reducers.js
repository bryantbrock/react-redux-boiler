import {combineReducers} from 'redux'
import AuthReducer from 'app/auth/reducer'

export default combineReducers({
  auth: AuthReducer,
})