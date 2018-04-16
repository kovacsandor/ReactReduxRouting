import { Link } from 'react-router-dom'
import PostListFetch from '../actions/PostListFetch'
import { ROUTE } from '../constants'
import React from 'react'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PostList extends React.Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		// example: 0,
	// 	}
	// }

	// componentWillMount() { }
	// componentWillReceiveProps() { }
	// shouldComponentUpdate() { }
	// componentWillUpdate() { }

	render() {
		return (
			<div>
				<div className={`text-xs-right`}>
					<Link
						className={`btn btn-primary`}
						to={ROUTE.postNew}
					>
						Add a post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className={`list-group`}>
					{_.map(this.props.posts, post =>
						<li
							className={`list-group-item`}
							key={post.id}
						>
							{post.title}
						</li>
					)}
				</ul>
			</div>
		)
	}

	componentDidMount() {
		this.props.fetchPosts()
	}
	// getSnapshotBeforeUpdate() { }
	// componentDidUpdate() { }
	// componentWillUnmount() { }
}

function mapDispatchToProps(dispatch) {
	return { fetchPosts: bindActionCreators(PostListFetch, dispatch) }
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
// export default connect(null, { PostListFetch })(PostList)