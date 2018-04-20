import { APIKey, Action, RootURL } from '../constants'

import Axios from 'axios'

export default function (id, callback) {
	const request = Axios.delete(`${RootURL}/posts/${id}${APIKey}`).then(callback)
	return {
		payload: {id},
		type: Action.POST_DELETE,
	}
}