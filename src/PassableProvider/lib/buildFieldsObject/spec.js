import buildFieldsObject from './index';

describe('Test buildFieldsObject function', () => {
    it('should reduce initial state into an object', () => {
        expect(buildFieldsObject({
            field_1: {
                checked: true,
                value: 'on'
            }
        })).toEqual({
            field_1: {
                checked: true,
                value: 'on'
            }
        });
    });

    it('should assume value when not an object', () => {
        expect(buildFieldsObject({
            field_1: true
        })).toEqual({
            field_1: {
                value: true
            }
        });
    });

    it('should default to an empty object when no arguments passed', () => {
        expect(buildFieldsObject()).toEqual({});
    });

    it('should use default for null and undefined', () => {
        expect(buildFieldsObject(null)).toEqual({});
        expect(buildFieldsObject(undefined)).toEqual({});
    });
});