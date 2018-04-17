import React from 'react'
import { InputType } from '../constants'

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
        const { input: { label, value, onChange } } = this.props
        return (
            <div className={`form-group`}>
                <label>
                    {this.props.label}
                </label>
                <input
                    className={`form-control`}
                    type={InputType.TEXT}
                    {...value}
                />
            </div>
        )
    }

    // componentDidMount() { }
    // getSnapshotBeforeUpdate() { }
    // componentDidUpdate() { }
    // componentWillUnmount() { }
}