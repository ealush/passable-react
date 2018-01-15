import { isAnObject } from '../index';
import deepassign from '@fiverr/futile/lib/deepassign';

export default function buildFieldsObject(initialStateObject) {
    return Object.keys(initialStateObject || {}).reduce((fields, current) => {
        fields[current] = fields[current] || {};
        if (isAnObject(initialStateObject[current])) {
            fields[current] = deepassign({}, initialStateObject[current]);
        } else {
            // silly assumption. need to revise it.
            fields[current].value = initialStateObject[current];
        }

        fields[current] = deepassign({
            errors: [],
            warnings: []
        }, fields[current]);
        return fields;
    }, {});
}