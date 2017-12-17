import React, { Component } from 'react';
import PassableProvider from '../../src/PassableProvider';
import passes from './passes';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.initialFormState = {
            username: 'Any',
            phone: 123456
        }
    }

    render() {

        return (
            <PassableProvider name="MyForm" passes={passes} initialFormState={this.initialFormState}>
                {({onChange, onBlur, fields}) => (
                    <form>
                        <input type="text" onChange={onChange} onBlur={onBlur} defaultValue={fields.username.value} name="username"/>
                        <input type="number" onChange={onChange} onBlur={onBlur} defaultValue={fields.phone.value} name="phone"/>
                    </form>
                )}
            </PassableProvider>
        );
    }
}

export default MyForm;