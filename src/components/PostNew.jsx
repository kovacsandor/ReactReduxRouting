import { Field, reduxForm } from 'redux-form'

import React from 'react'
import FormTextInput from './FormTextInput'

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

        const FieldName = {
            TAGS: `tags`,
            TITLE: `title`,
        }

        return (
            <form>
                <Field
                    component={FormTextInput}
                    label={this.formatLabel(FieldName.TITLE)}
                    name={FieldName.TITLE}
                ></Field>
                <Field
                    component={FormTextInput}
                    label={this.formatLabel(FieldName.TAGS)}
                    name={FieldName.TAGS}
                ></Field>
            </form>
        )
    }

    formatLabel(label) {
        return label.charAt(0).toUpperCase() + label.slice(1)
    }

    // componentDidMount() { }
    // getSnapshotBeforeUpdate() { }
    // componentDidUpdate() { }
    // componentWillUnmount() { }
}

export default reduxForm({
    form: `PostNewForm`, // name of the form, has to be unique
})(PostNew)