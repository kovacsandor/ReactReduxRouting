import { reducer as FormReducer } from 'redux-form'
import PostReducer from './PostReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	form: FormReducer,
	posts: PostReducer,
})

export default rootReducer;
