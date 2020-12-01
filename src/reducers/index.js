import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import userFormReducer from './userFormReducer'
import jokeReducer from './jokeReducer'
import goToReducer from './goToReducer'
import popupReducer from './popupReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  user: userFormReducer,
  joke: jokeReducer,
  goToPageOurList: goToReducer,
  popupActive: popupReducer
});

export default rootReducer
