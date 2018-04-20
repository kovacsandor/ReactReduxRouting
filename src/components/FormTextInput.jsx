import { InputType } from '../constants'
import React from 'react'

export default class FormTextInput extends React.Component {

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
        const { input, label, meta } = this.props
        const isFaulty = meta.touched && meta.error
        return (
            <div className={`form-group ${isFaulty ? `has-danger` : ``}`}>
                <label>
                    {label}
                </label>
                <input
                    className={`form-control`}
                    type={InputType.TEXT}
                    {...input}
                />
                {isFaulty &&
                    <div className={`text-help`}>
                        {meta.error}
                    </div>
                }
            </div>
        )
    }

    // componentDidMount() { }
    // getSnapshotBeforeUpdate() { }
    // componentDidUpdate() { }
    // componentWillUnmount() { }
}