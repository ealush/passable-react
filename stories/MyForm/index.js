import React, { Component } from 'react';
import PassableProvider from '../../dist/passable-provider';
import passes from './passes';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.initialFormState = {
            username: 'Any',
            phone: 123456,
            checkbox: true,
            radio: {
                value: 'yo',
                checked: true
            }
        }
    }

    formStateUpdated(nextState) {
        console.log(nextState);
    }

    render() {

        return (
            <PassableProvider passes={passes} initialFormState={this.initialFormState} formStateUpdated={this.formStateUpdated}>
                {({validateOnEvent, setTouchedOnEvent, fields, validateAll}) => (
                    <form onChange={validateOnEvent} onBlur={setTouchedOnEvent}>
                        <input type="text" defaultValue={fields.username.value} name="username"/>
                        <input type="number" defaultValue={fields.phone.value} name="phone"/>
                        <input type="checkbox" defaultChecked={fields.checkbox.value} name="checkbox"/>
                        <input type="radio" defaultChecked={fields.radio.value} name="radio"/>
                        <select name="select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <textarea name="textarea" />
                        <input type="button" onClick={validateAll} value="submit"/>
                    </form>
                )}
            </PassableProvider>
        );
    }
}

export default MyForm;