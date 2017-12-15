import React, { Component } from 'react';
import passable from 'passable';
import mergePassableObjectWithStateFields from './lib';

class PassableWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            valid: null
        };

        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.custom = this.props.custom || {};
        this.passes = this.props.passes;
    }

    validateField(name, value) {
        let formData = this.getValues();
        if (value) { formData[name] = value; }

        this.run(name, formData);
    }

    processResults(passableObject) {
        this.setState((prevState) => (
            Object.assign({},
                prevState,
                mergePassableObjectWithStateFields(passableObject, prevState))
        ));
    }

    run(specific = [], formData = this.getValues()) {
        const result = passable(this.props.name,
            specific,
            this.passes(formData),
            this.custom);

        this.processResults(result);
    }

    getValues() {
        const fields = this.state.fields;
        const values = Object.keys(fields).reduce((accumulator, current) => {
            accumulator[current] = fields[current];
            return accumulator;
        }, {});
        return values;
    }

    onChange(e) {
        const target = e.target;
        const { name, value } = target;

        this.validateField(name, value);

        this.setInField(name, {
            dirty: true
        });
    }

    onBlur(e) {
        const target = e.target;
        const {
            name
        } = target;

        this.setInField(name, { touched: true });
    }

    setInField(name, entries = {}) {
        this.setState((prevState) => {
            const fields = prevState.fields || {};
            const field = fields[name] || {};
            const newField = Object.assign({}, field, entries);
            return Object.assign({}, prevState, {
                fields: Object.assign({}, fields, {[name]: newField})
            });
        });
    }

    render() {
        const {
            children,
            name,
            passes,
            schema,
            ...props
        } = this.props;

        return (
            <form name={name} {...props}>
                {children({
                    onChange: this.onChange,
                    onBlur: this.onBlur,
                    fields: this.state.fields
                })}
            </form>
        );
    }
}

export default PassableWrapper;