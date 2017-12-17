import React, { Component } from 'react';
import passable from 'passable';
import {inputAttributesByType, buildFieldsObject, mergeFieldIntoState} from './lib'

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
        return buildFieldsObject(initialFormState);
    }

    processResults(passableObject) {
        this.setState((prevState) => {

        });
    }

    validate(specific = []) {
        const formData = this.getFields();
        const result = passable(this.props.name,
            specific,
            this.passes(formData),
            this.custom);

        this.processResults(result);
    }

    getFields() {
        return Object.assign({}, this.state.fields);
    }

    getFieldAttributes(name, element) {
        if (!element) {
            return {};
        }

        const formData = this.getFields();

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
        this.setState((prevState) => mergeFieldIntoState(prevState, name, entries));
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