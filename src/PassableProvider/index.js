import React, { Component } from 'react';
import {fieldAttributesByType, buildFieldsObject, mergeFieldIntoState, mergeValidationResults} from './lib'

class PassableProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: buildFieldsObject(props.initialFormState),
            errors: {},
            warnings: {},
            warningCount: 0,
            errorCount: 0
        };

        this.custom = props.custom || {};
        this.passes = props.passes;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.formStateUpdated) {
            return this.props.formStateUpdated(this.state, prevState);
        }
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

        const nextState = mergeFieldIntoState(this.state, name, {
            ...dirtyProp,
            ...fieldAttributes
        });

        this.validateOne(name, nextState.fields);
    }

    setTouchedOnEvent = (e) => {
        const { name, fieldAttributes } = this.getFieldDataFromEvent(e);

        if (this.state.fields[name] && this.state.fields[name].touched) {
            return;
        }

        this.setInField(name, {
            touched: true,
            ...fieldAttributes
        });
    }

    validateOne = (name, data) => {
        this.validate(name, data || his.state.fields || {});
    }

    validateAll = () => {
        this.validate();
    }

    validate = (specific = [], data) => {
        this.setState((prevState) => {
            const fields = data || this.state.fields || {};
            let nextState = Object.assign({}, prevState, { fields });
            nextState = mergeValidationResults(nextState, this.passes({
                specific,
                data: nextState.fields,
                custom: this.custom
            }));
            nextState.warningCount = Object.keys(nextState.warnings).length;
            nextState.errorCount = Object.keys(nextState.errors).length;
            return nextState;
        });
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
