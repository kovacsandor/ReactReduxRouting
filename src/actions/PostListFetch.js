import { ACTION } from '.'
import Axios from 'axios'

const ROOT_URL = `http://reduxblog.herokuapp.com/api`
const API_KEY = `?key=test1324`

function PostListFetch() {
	const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`)
	return {
		payload: request,
		type: ACTION.postListFetch,
	}
}

export default PostListFetch