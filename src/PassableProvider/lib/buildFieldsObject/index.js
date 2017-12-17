import {isAnObject} from '../index';

export default function buildFieldsObject(initialStateObject) {
    return Object.keys(initialStateObject).reduce((fields, current) => {
        fields[current] = fields[current] || {};
        if (isAnObject(initialStateObject[current])) {
            // silly assumption. needs to revise it.
            fields[current] = Object.assign({}, initialStateObject[current]);
        } else {
            fields[current].value = initialStateObject[current];
        }
        return fields;
    }, {});
}