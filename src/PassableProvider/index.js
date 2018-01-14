import React, { Component } from 'react';
import {fieldAttributesByType, buildFieldsObject, mergeFieldIntoState, mergeValidationResults} from './lib'

class PassableProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: buildFieldsObject(props.initialFormState),
            errors: {},
            warnings: {}
        };

        this.custom = this.props.custom || {};
        this.passes = this.props.passes;
    }

    getFieldAttributes(name, element) {
        if (!element) { return {}; }

        return Object.assign({}, this.state.fields[name], fieldAttributesByType(element));
    }

    getFieldDataFromEvent = ({ target } = {}) => {
        const { name } = target;
        const fieldAttributes = this.getFieldAttributes(name, target);
        return { name, fieldAttributes };
    }

    validateOnEvent = (e, setDirty = true) => {
        const { name, fieldAttributes } = this.getFieldDataFromEvent(e);
        const dirtyProp = setDirty ? { dirty: true } : {};

        this.setInField(name, {
            ...dirtyProp,
            ...fieldAttributes
        }, () => {
            this.validateOne(name);
        });
    }

    setTouchedOnEvent = (e) => {
        const { name, fieldAttributes } = this.getFieldDataFromEvent(e);

        this.setInField(name, {
            touched: true,
            ...fieldAttributes
        });
    }

    validateOne = (name, data) => {
        this.validate(name, this.state.fields || {});
    }

    validateAll = () => {
        this.validate();
    }

    validate = (specific = [], data) => {
        this.setState((prevState) => mergeValidationResults(prevState, this.passes({
            specific,
            data: data || this.state.fields || {},
            custom: this.custom
        })));
    }

    setInField(name, entries = {}, callback) {
        this.setState((prevState) => mergeFieldIntoState(prevState, name, entries), callback);
    }

    render() {
        if (typeof this.props.children !== 'function') { return null; }
        if (typeof this.props.passes !== 'function') { return null; }

        return (
            this.props.children({
                setTouchedOnEvent: this.setTouchedOnEvent,
                validateOnEvent: this.validateOnEvent,
                validateOne: this.validateOne,
                validateAll: this.validateAll,
                fields: this.state.fields,
                errors: this.state.errors,
                warnings: this.state.warnings
            })
        );
    }
}

export default PassableProvider;
