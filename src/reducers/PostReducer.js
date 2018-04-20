import { Action } from '../constants'
import _ from 'lodash'

const ID = `id`

export default function (state = {}, action) {
	switch (action.type) {
		case Action.POST_DELETE:
			const s = { ...state }
			delete s[action.payload.id] // _.omit(state, action.payload.id)
			return s
		case Action.POST_FETCH:
			const post = action.payload.data
			return { ...state, [post.id]: post }
		case Action.POST_LIST_FETCH:
			return _.mapKeys(action.payload.data, ID)
		default:
			return state
	}
}