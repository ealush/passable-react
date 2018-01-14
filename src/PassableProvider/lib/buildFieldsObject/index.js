import {isAnObject} from '../index';

export default function buildFieldsObject(initialStateObject) {
    return Object.keys(initialStateObject || {}).reduce((fields, current) => {
        fields[current] = fields[current] || {};
        if (isAnObject(initialStateObject[current])) {
            fields[current] = Object.assign({}, initialStateObject[current]);
        } else {
            // silly assumption. need to revise it.
            fields[current].value = initialStateObject[current];
        }
        fields[current] = Object.assign({
            errors: [],
            warnings: []
        }, fields[current]);
        return fields;
    }, {});
}