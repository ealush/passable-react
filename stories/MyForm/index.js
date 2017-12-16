import React, { Component } from 'react';
import {withPassable} from '../../src/PassableProvider';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const {
            onChange,
            onBlur
        } = this.props;

        return (
            <form>
                <input type="text" onChange={onChange} onBlur={onBlur} name="username"/>
                <input type="number" onChange={onChange} onBlur={onBlur} name="phone"/>
            </form>
        );
    }
}

export default withPassable(MyForm);