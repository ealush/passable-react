import { mergeInField, generateFieldValidationSummary } from '../index';

export default function mergeValidationResults(state, passableObject) {
    const tested = passableObject.testsPerformed;
    const nextState = Object.assign(state);
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

        accumulator.fields[current] = mergeInField(fields[current], {
            hasError,
            hasWarning,
            errors: passableObject.validationErrors[current] || [],
            warnings: passableObject.validationWarnings[current] || []
        });

        return accumulator;
    }, { fields, errors: nextState.errors, warnings: nextState.warnings});
}