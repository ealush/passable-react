import React, { Component } from 'react';
import passable from 'passable';
import {inputAttributesByType} from './lib'

class PassableProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: this.initFields(props.initialFormState),
            errors: {},
            warnings: {}
        };

        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.custom = this.props.custom || {};
        this.passes = this.props.passes;
    }

    initFields(initialFormState = {}) {
        return Object.keys(initialFormState).reduce((fields, currentField) => {
            fields[currentField] = fields[currentField] || {};
            fields[currentField].value = initialFormState[currentField];
            return fields;
        }, {});
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

    validate(specific = []) {
        const formData = this.getValues();
        const result = passable(this.props.name,
            specific,
            this.passes(formData),
            this.custom);

        this.processResults(result);
    }

    getValues() {
        const fields = this.state.fields;
        return Object.keys(fields).reduce((accumulator, current) => {
            accumulator[current] = fields[current];
            return accumulator;
        }, {});
    }

    getFieldAttributes(name, element) {
        if (!element) {
            return {};
        }

        const formData = this.getValues();

        return Object.assign({}, formData[name], inputAttributesByType(element));
    }

    onChange(e) {
        const target = e.target;
        const { name } = target;
        const fieldAttributes = this.getFieldAttributes(name, target);

        this.setInField(name, {
            dirty: true,
            ...fieldAttributes
        });

        this.validate(name);

    }

    onBlur(e) {
        const target = e.target;
        const { name } = target;
        const fieldAttributes = this.getFieldAttributes(name, target);

        this.setInField(name, {
            touched: true,
            ...fieldAttributes
        });
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
        const { children } = this.props;

        return (
            children({
                onChange: this.onChange,
                onBlur: this.onBlur,
                fields: this.state.fields,
                errors: this.state.errors,
                warnings: this.state.warnings
            })
        );
    }
}

export default PassableProvider;