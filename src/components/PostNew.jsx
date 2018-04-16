import { Field, reduxForm } from 'redux-form'

import React from 'react'

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
		return (
			<div>
				PostNew
			</div>
		)
	}

	// componentDidMount() { }
	// getSnapshotBeforeUpdate() { }
	// componentDidUpdate() { }
	// componentWillUnmount() { }
}

export default reduxForm({
	form: `PostNewForm`, // name of the form
})(PostNew)

// 1.40-hotfix-1 Search top image typescript - Submit manuscript 2-szer van