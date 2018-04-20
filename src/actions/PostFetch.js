import { APIKey, Action, RootURL } from '../constants'

import Axios from 'axios'

export default function (id) {
	const request = Axios.get(`${RootURL}/posts/${id}${APIKey}`)
	return {
		payload: request,
		type: Action.POST_FETCH,
	}
}