import { APIKey, Action, RootURL } from '../constants'

import Axios from 'axios'

export default function (values, callback) {
	const request = Axios.post(`${RootURL}/posts${APIKey}`, values).then(callback)
	return {
		payload: request,
		type: Action.POST_CREATE,
	}
}