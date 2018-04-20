import PostReducer from './PostReducer'
import { reducer as ReduxFormReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	form: ReduxFormReducer,
	posts: PostReducer,
})

export default rootReducer;
