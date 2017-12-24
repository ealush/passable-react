import React, { Component } from 'react';
import passable from 'passable';
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

    onChange = (e) => {
        const target = e.target;
        const { name } = target;
        const fieldAttributes = this.getFieldAttributes(name, target);

        this.setInField(name, {
            dirty: true,
            ...fieldAttributes
        }, () => {
            this.validate(name);
        });
    }

    onBlur = (e) => {
        const target = e.target;
        const { name } = target;
        const fieldAttributes = this.getFieldAttributes(name, target);

        this.setInField(name, {
            touched: true,
            ...fieldAttributes
        });
    }

    validate = (specific = []) => {
        const result = passable(this.props.name,
            specific,
            this.passes(this.state.fields),
            this.custom);

        this.setState((prevState) => mergeValidationResults(prevState, result));
    }

    setInField(name, entries = {}, callback) {
        this.setState((prevState) => mergeFieldIntoState(prevState, name, entries), callback);
    }

    render() {
        if (typeof this.props.children !== 'function') { return null; }

        return (
            this.props.children({
                onChange: this.onChange,
                onBlur: this.onBlur,
                validate: this.validate,
                fields: this.state.fields,
                errors: this.state.errors,
                warnings: this.state.warnings
            })
        );
    }
}

export default PassableProvider;