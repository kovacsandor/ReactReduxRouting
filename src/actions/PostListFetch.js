import { APIKey, Action, RootURL } from '../constants'

import Axios from 'axios'

export default function () {
	const request = Axios.get(`${RootURL}/posts${APIKey}`)
	return {
		payload: request,
		type: Action.POST_LIST_FETCH,
	}
}