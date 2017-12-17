import { mergeInField, generateFieldValidationSummary } from '../index';

export default function mergeValidationResults(state, passableObject, entries) {
    const tested = Object.keys(passableObject.testsPerformed);
    const nextState = Object.assign(state);
    const fields = nextState.fields;

    return tested.reduce((accumulator, current) => {
        const {
            hasError,
            hasWarning
        } = generateFieldValidationSummary(tested[current]);

        hasError ? accumulator.errors[current] = passableField.failCount
            : delete accumulator.errors[current];

        hasWarning ? accumulator.warnings[current] = passableField.warnCount
            : delete accumulator.warnings[current];

        accumulator[current] = mergeInField(fields[current], {
            hasError,
            hasWarning,
            errors: passableObject.validationErrors[current] || [],
            warnings: passableObject.validationWarnings[current] || []
        });

        return accumulator;
    }, { fields, errors: nextState.errors, warnings: nextState.warnings});
}