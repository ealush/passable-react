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
        })).toMatchSnapshot();
    });

    it('should default to empty passable object when of invalid type', () => {
        expect(mergeValidationResults(state, 1)).toMatchSnapshot();;
        expect(mergeValidationResults(state, null)).toMatchSnapshot();;
        expect(mergeValidationResults(state, [])).toMatchSnapshot();;
        expect(mergeValidationResults(state, true)).toMatchSnapshot();;
        expect(mergeValidationResults(state, 'false')).toMatchSnapshot();;
        expect(mergeValidationResults(state, new Function())).toMatchSnapshot();;
    });

    it('should return default `state` if missing passable object', () => {
        const expectedResult = Object.assign(state, {
            errors: {},
            warnings: {}
        });

        expect(mergeValidationResults(state)).toMatchSnapshot();;
    });

    it('should return default `state` if no arguments passed', () => {
        expect(mergeValidationResults()).toMatchSnapshot();;
    });
});