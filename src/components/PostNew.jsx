import { Field, reduxForm } from 'redux-form'

import FormTextInput from './FormTextInput'
import { Link } from 'react-router-dom'
import PostCreate from '../actions/PostCreate'
import React from 'react'
import { Route } from '../constants'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PostNew extends React.Component {

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
		const { handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit(values => this.onSubmit(values))}>
				<Field
					component={FormTextInput}
					label={this.formatLabel(FieldName.TITLE)}
					name={FieldName.TITLE}
				></Field>
				<Field
					component={FormTextInput}
					label={this.formatLabel(FieldName.CATEGORIES)}
					name={FieldName.CATEGORIES}
				></Field>
				<Field
					component={FormTextInput}
					label={this.formatLabel(FieldName.CONTENT)}
					name={FieldName.CONTENT}
				></Field>
				<button
					className={`btn btn-primary`}
					type={`submit`}
				>
					Submit
				</button>
				<Link
					className={`btn btn-danger`}
					to={Route.ROOT}
				>
					Cancel
				</Link>
			</form>
		)
	}

	// componentDidMount() { }
	// getSnapshotBeforeUpdate() { }
	// componentDidUpdate() { }
	// componentWillUnmount() { }


	formatLabel(label) {
		return label.charAt(0).toUpperCase() + label.slice(1)
	}

	onSubmit(values) {
		this.props.createPost(values, () => this.props.history.push(Route.ROOT))
	}
}

const FieldName = {
	CATEGORIES: `categories`,
	CONTENT: `content`,
	TITLE: `title`,
}

function validate(values) {
	const
		cts = FieldName.CATEGORIES,
		cnt = FieldName.CONTENT,
		ttl = FieldName.TITLE
	return {
		[cts]: !values[cts] && `Field ${cts} should be not empty.`,
		[cnt]: !values[cnt] && `Field ${cnt} should be not empty.`,
		[ttl]: !values[ttl] && `Field ${ttl} should be not empty.`,
	}
}

function mapDispatchToProps(dispatch) {
	return { createPost: bindActionCreators(PostCreate, dispatch) }
}

export default reduxForm({
	form: `PostNewForm`, // name of the form, has to be unique
	validate,
})(
	connect(null, mapDispatchToProps)(PostNew)
)