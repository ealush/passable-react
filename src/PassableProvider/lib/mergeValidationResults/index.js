import { generateFieldValidationSummary, getDefaultState } from '../index';
import deepassign from '@fiverr/futile/lib/deepassign';

export default function mergeValidationResults(state, passableObject) {
    let nextState = deepassign({}, getDefaultState(), state);
    if (!state || !passableObject) { return nextState; }

    const validationResult = deepassign({
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

        hasError ? accumulator.errors[current] = curr.failCount
            : delete accumulator.errors[current];

        hasWarning ? accumulator.warnings[current] = curr.warnCount
            : delete accumulator.warnings[current];

        accumulator.fields[current] = Object.assign({}, fields[current], {
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