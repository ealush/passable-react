import mergeValidationResults from './index';

describe('Test mergeValidationResults function', () => {

    const state = {
        fields: {
            field_1: {
                touched: true
            },
            field_2: {
                value: 1
            }
        }
    };

    it('should merge validation results into existing state', () => {
        expect(mergeValidationResults(state, {
            testsPerformed: {
                field_1: {
                    failCount: 1,
                    warnCount: 0,
                    testCount: 1
                }
            },
            validationErrors: {
                field_1: ['error_string']
            },
            validationWarnings: {}
        })).toEqual({
            errors: {
                field_1: 1
            },
            warnings: {},
            fields: {
                field_1: {
                    errors: ['error_string'],
                    hasError: true,
                    hasWarning: false,
                    warnings: [],
                    touched: true
                },
                field_2: {
                    value: 1
                }
            }
        })
    });

    it('should default to empty passable object when of invalid type', () => {
        const expectedResult = Object.assign(state, {
            errors: {},
            warnings: {}
        });

        expect(mergeValidationResults(state, 1)).toEqual(expectedResult);
        expect(mergeValidationResults(state, null)).toEqual(expectedResult);
        expect(mergeValidationResults(state, [])).toEqual(expectedResult);
        expect(mergeValidationResults(state, true)).toEqual(expectedResult);
        expect(mergeValidationResults(state, 'false')).toEqual(expectedResult);
        expect(mergeValidationResults(state, new Function())).toEqual(expectedResult);
    });

    it('should return default `state` if missing passable object', () => {
        const expectedResult = Object.assign(state, {
            errors: {},
            warnings: {}
        });

        expect(mergeValidationResults(state)).toEqual(expectedResult);
    });

    it('should return default `state` if no arguments passed', () => {
        const expectedResult = {
            errors: {},
            warnings: {},
            fields: {}
        };

        expect(mergeValidationResults()).toEqual(expectedResult);
    });
});