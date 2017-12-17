import React, { Component } from 'react';
import PassableProvider from '../../src/PassableProvider';
import passes from './passes';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.initialFormState = {
            username: 'Any',
            phone: 123456,
            checkbox: true,
            radio: false
        }
    }

    render() {

        return (
            <PassableProvider name="MyForm" passes={passes} initialFormState={this.initialFormState}>
                {({onChange, onBlur, fields}) => (
                    <form>
                        <input type="text" onChange={onChange} onBlur={onBlur} defaultValue={fields.username.value} name="username"/>
                        <input type="number" onChange={onChange} onBlur={onBlur} defaultValue={fields.phone.value} name="phone"/>
                        <input type="checkbox" onChange={onChange} onBlur={onBlur} defaultChecked={fields.checkbox.value} name="checkbox"/>
                        <input type="radio" onChange={onChange} onBlur={onBlur} defaultChecked={fields.radio.value} name="radio"/>
                    </form>
                )}
            </PassableProvider>
        );
    }
}

export default MyForm;