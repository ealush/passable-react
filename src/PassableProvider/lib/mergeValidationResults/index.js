import { generateFieldValidationSummary, getDefaultState } from '../index';
import merge from 'lodash/merge';

export default function mergeValidationResults(state, passableObject) {
    let nextState = merge({}, getDefaultState(), state);
    if (!state || !passableObject) { return nextState; }

    const validationResult = Object.assign({
        validationErrors: {},
        validationWarnings: {}
    }, passableObject);

    const tested = validationResult.testsPerformed || [];
    const fields = nextState.fields;

    nextState = Object.keys(tested).reduce((accumulator, current) => {
        const curr = tested[current];
        const {
            hasError,
            hasWarning
        } = generateFieldValidationSummary(curr);

        const isAsync = Boolean(passableObject.async && passableObject.async[current]);

        hasError ? accumulator.errors[current] = curr.failCount
            : delete accumulator.errors[current];

        hasWarning ? accumulator.warnings[current] = curr.warnCount
            : delete accumulator.warnings[current];

        accumulator.fields[current] = Object.assign({}, fields[current], {
            pending: isAsync ? !passableObject.async[current].done : false,
            hasError,
            hasWarning,
            errors: validationResult.validationErrors[current] || [],
            warnings: validationResult.validationWarnings[current] || []
        });
        return accumulator;
    }, { fields, errors: nextState.errors, warnings: nextState.warnings });
    nextState.warningCount = Object.keys(nextState.warnings).length;
    nextState.errorCount = Object.keys(nextState.errors).length;
    return nextState;
}