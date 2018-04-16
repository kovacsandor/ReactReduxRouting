import { ACTION } from '../actions'
import _ from 'lodash'

const ID = `id`

export default function (state = {}, action) {
	switch (action.type) {
		case ACTION.postListFetch:
			return _.mapKeys(action.payload.data, ID)
		default:
			return state
	}
}