import { isAnObject } from '../index';
import merge from 'lodash/merge';

export default function buildFieldsObject(initialStateObject) {
    return Object.keys(initialStateObject || {}).reduce((fields, current) => {
        fields[current] = fields[current] || {};
        if (isAnObject(initialStateObject[current])) {
            fields[current] = merge({}, initialStateObject[current]);
        } else {
            // silly assumption. need to revise it.
            fields[current].value = initialStateObject[current];
        }

        fields[current] = merge({
            errors: [],
            warnings: []
        }, fields[current]);
        return fields;
    }, {});
}