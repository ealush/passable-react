import { generateFieldValidationSummary } from '../index';

export default function mergeValidationResults(state, passableObject) {
    const nextState = Object.assign({ errors: {}, warnings: {}, fields: {}}, state);
    if (!state || !passableObject) { return nextState; }

    const validationResult = Object.assign({
        validationErrors: {},
        validationWarnings: {}
    }, passableObject);
    const tested = validationResult.testsPerformed || [];
    const fields = nextState.fields;

    return Object.keys(tested).reduce((accumulator, current) => {
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
    }, { fields, errors: nextState.errors, warnings: nextState.warnings});
}