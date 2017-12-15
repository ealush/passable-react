import React, { Component } from 'react';
import PropTypes from 'prop-types'
import passable from 'passable';

class PassableProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            warnings: {}
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
        this.setState((prevState) => {
            const tested = Object.keys(passableObject.testsPerformed);
            const nextState = Object.assign(prevState);
            const fields = nextState.fields;

            return tested.reduce((accumulator, current) => {
                const passableField = passableObject.testsPerformed[current] || {};
                const fieldFromState = fields[current] || {};
                const hasError = passableField.failCount > 0;
                const hasWarning = passableField.warnCount > 0;

                hasError ? accumulator.errors[current] = passableField.failCount
                    : delete accumulator.errors[current];

                hasWarning ? accumulator.warnings[current] = passableField.warnCount
                    : delete accumulator.warnings[current];


                accumulator.fields[current] = Object.assign({}, fieldFromState, {
                    hasError,
                    hasWarning,
                    errors: passableObject.validationErrors[current] || [],
                    warnings: passableObject.validationWarnings[current] || []
                });
                return accumulator;
            }, { fields, errors: nextState.errors, warnings: nextState.warnings});
        });
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
            ...props
        } = this.props;

        return (
            children({
                onChange: this.onChange,
                onBlur: this.onBlur,
                fields: this.state.fields,
            });
        );
    }
}

export default PassableProvider;