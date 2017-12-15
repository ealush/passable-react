import React, { Component } from 'react';
import Passable from 'passable';
import passes from './passes';

class MyForm extends Component {
    constructor(props) {
        super(props);

        this.schema = {
            ['field1']: {
                required: true,
                dependsOn: ['field2']
            }
        }
    }

    changeHandler(e, type) {

    }

    render() {
        return (
            <Form name="MyForm" schema={this.schema} passes={}>
                <input type="text" onChange={this.onChange}/>
            </Form>
        );
    }
}

// ###################################### //

// ###################################### //

class Form extends Component {
    constructor(props) {
        super(props);
    }

    validate(name = '', specific = [], passes = () => { }, custom = {}) {
        return Passable(name, specific, passes, custom);
    }

    render() {
        const {
            children,
            passes,
            name
        } = this.props;

        const valididy = this.validate(name);

        return (
            <form>
                {() => {}}
            </form>
        );
    }
}