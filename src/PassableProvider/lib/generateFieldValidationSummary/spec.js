import generateFieldValidationSummary from './index';

describe('Test generateFieldValidationSummary function', () => {
    it('should produce an object with both errors and warning equal false', () => {
        expect(generateFieldValidationSummary({
            failCount: 0,
            warnCount: 0
        })).toEqual({
            hasError: false,
            hasWarning: false
        });
    });

    it('should produce an object with both errors and warning equal true', () => {
        expect(generateFieldValidationSummary({
            failCount: 1,
            warnCount: 3
        })).toEqual({
            hasError: true,
            hasWarning: true
        });
    });

    it('should produce an object with errors:false and warning:true', () => {
        expect(generateFieldValidationSummary({
            failCount: 0,
            warnCount: 2
        })).toEqual({
            hasError: false,
            hasWarning: true
        });
    });

    it('should produce an object with errors:true and warning:false', () => {
        expect(generateFieldValidationSummary({
            failCount: 44,
            warnCount: 0
        })).toEqual({
            hasError: true,
            hasWarning: false
        });
    });

    it('should default to an object with all values as false', () => {
        expect(generateFieldValidationSummary()).toEqual({
            hasError: false,
            hasWarning: false
        });
    });

    it('should default to an object with all values as false for a null passableObject', () => {
        expect(generateFieldValidationSummary(null)).toEqual({
            hasError: false,
            hasWarning: false
        });
    });
});