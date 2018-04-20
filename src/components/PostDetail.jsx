import { Link } from 'react-router-dom'
import PostDelete from '../actions/PostDelete'
import PostFetch from '../actions/PostFetch'
import React from 'react'
import { Route } from '../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PostDetail extends React.Component {

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
		const { post } = this.props
		return (
			post ?
				<div>
					<Link
						className={`btn btn-primary`}
						to={Route.ROOT}
					>
						Back to posts list
					</Link>
					<h3>
						{post.title}
					</h3>
					<h6>
						Categories: {post.categories}
					</h6>
					<p>
						{post.content}
					</p>
					<button
						className={`btn btn-danger`}
						onClick={() => this.onButtonDeleteClicked()}
					>
						Delete post
					</button>
				</div>
				:
				<div>
					loading...
				</div>
		)
	}

	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id)
	}
	// getSnapshotBeforeUpdate() { }
	// componentDidUpdate() { }
	// componentWillUnmount() { }

	onButtonDeleteClicked() {
		this.props.deletePost(this.props.match.params.id, () => this.props.history.push(Route.ROOT))
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deletePost: bindActionCreators(PostDelete, dispatch),
		fetchPost: bindActionCreators(PostFetch, dispatch),
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)