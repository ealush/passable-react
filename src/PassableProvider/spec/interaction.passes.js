import passable, { enforce, WARN } from 'passable';

export const errors = {
    field_1: 'field_1 error string',
    field_2: 'field_2 error string',
    field_3: 'field_3 error string'
};

export const warnings = {
    field_4: 'field_4 error string',
    field_5: 'field_5 error string',
    field_6: 'field_6 error string'
};

export default function passes({ specific = [], data }) {
    return passable('form_1', (test) => {
        test('field_1', errors.field_1, () => {
            enforce(data.field_1.value).largerThan(5)
        });
        test('field_2', errors.field_2, () => true);
        test('field_3', errors.field_3, () => false);
        test('field_4', warnings.field_4, () => {
            enforce(data.field_4.value).largerThan(5);
        }, WARN);
        test('field_5', warnings.field_5, () => true, WARN);
        test('field_6', warnings.field_6, () => false, WARN);
    }, specific);
}