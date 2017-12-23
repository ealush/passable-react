import fieldAttributesByType from './index';

describe('Test fieldAttributesByType function', () => {

    it('should extract only the value property of a text input', () => {
        expect(fieldAttributesByType({
            value: 1,
            type: 'text',
            id: 'input',
            checked: false
        })).toEqual({ value: 1 });
    });

    it('should extract only the value and checked properties of a checkbox input', () => {
        expect(fieldAttributesByType({
            value: 1,
            type: 'checkbox',
            id: 'input',
            checked: false
        })).toEqual({
            value: 1,
            checked: false
        });
    });

    it('should extract only the value and checked properties of a radio input', () => {
        expect(fieldAttributesByType({
            value: 'on',
            type: 'radio',
            id: 'input',
            checked: true
        })).toEqual({
            value: 'on',
            checked: true
        });
    });

    it('should default to an empty string value when no value present', () => {
        expect(fieldAttributesByType({
            checked: false
        })).toEqual({
            value: ''
        });
    });

    it('should default to an empty string value when no field passed or bad argument', () => {
        expect(fieldAttributesByType()).toEqual({value: ''});
        expect(fieldAttributesByType(null)).toEqual({value: ''});
        expect(fieldAttributesByType(1)).toEqual({value: ''});
        expect(fieldAttributesByType(false)).toEqual({value: ''});
    });
});