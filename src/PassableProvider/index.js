import React, { Component } from 'react';
import { fieldAttributesByType,
    buildFieldsObject,
    mergeFieldIntoStateObject,
    mergeValidationResults,
    getDefaultState
} from './lib'
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';
import debounce from 'lodash/debounce';

class PassableProvider extends Component {

    constructor(props) {
        super(props);

        this.state = merge({}, getDefaultState(), {
            fields: buildFieldsObject(props.initialFormState)
        });

        this.validate = debounce(this.validate.bind(this), props.debounce || 0, { leading: false, trailing: true});
        this.custom = props.custom || {};
        this.passes = props.passes;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.formStateUpdated) {
            return this.props.formStateUpdated(this.state, prevState);
        }
    }

    getFieldAttributes(element) {
        if (!element) { return {}; }

        return merge({}, this.state.fields[element.name], fieldAttributesByType(element));
    }

    getFieldDataFromEvent = ({ target } = {}) => {
        return this.getFieldAttributes(target);
    }

    validateOnEvent = (e, setDirty = true) => {
        const fieldAttributes = this.getFieldDataFromEvent(e);
        const dirtyProp = setDirty ? {dirty: true} : {};
        const name = e.target.name;

        const nextState = mergeFieldIntoStateObject(this.state, name, {
            ...dirtyProp,
            ...fieldAttributes
        });

        this.validateOne(name, nextState.fields);
    }

    setTouchedOnEvent = (e) => {
        const fieldAttributes = this.getFieldDataFromEvent(e);

        const name = e.target.name;

        if (this.state.fields[name] && this.state.fields[name].touched) {
            return;
        }

        this.setInField(name, {
            touched: true,
            ...fieldAttributes
        });
    }

    validateOne = (name, data) => {
        this.updateField(data);
        this.validate([name]);
    }

    validateAll = () => {
        this.validate();
    }

    updateField = (fields, cb) => {
        if (!fields) {return;}
        const nextState = merge({}, this.state, {fields});
        this.updateState(nextState, cb);
    }

    validate(specific = []) {
        const fields = this.state.fields || {};
        const validationResult = this.passes({
            specific,
            data: fields,
            custom: this.custom
        }).done((result) => {
            this.updateStateWithValidationResult(result);
        });

        if (validationResult.async) {
            this.updateStateWithValidationResult(validationResult);
        }
    }

    updateState = (nextState, callback) => {
        if (isEqual(this.state, nextState)) { return; }
        this.setState(nextState, callback);
    }

    updateStateWithValidationResult = (validationResult) => {
        const nextState = mergeValidationResults(this.state, validationResult);
        this.updateState(nextState);
    }

    setInField(name, entries = {}, callback) {
        this.updateState(mergeFieldIntoStateObject(this.state, name, entries), callback);
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
