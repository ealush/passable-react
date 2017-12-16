import React, { Component } from 'react';
import PassableProvider from '../../src/PassableProvider';
import passes from './passes';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <PassableProvider name="MyForm" passes={passes}>
                {({onChange, onBlur}) => (
                    <form>
                        <input type="text" onChange={onChange} onBlur={onBlur} name="username"/>
                        <input type="number" onChange={onChange} onBlur={onBlur} name="phone"/>
                    </form>
                )}
            </PassableProvider>
        );
    }
}

export default MyForm;