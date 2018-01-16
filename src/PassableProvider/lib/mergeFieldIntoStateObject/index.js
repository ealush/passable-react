import merge from 'lodash/merge';

export default function mergeFieldIntoStateObject(state = {}, name, entries = {}) {
    if (!name && name !== 0) { return state;}
    const fields = state.fields || {};
    const field = fields[name] || {};
    const newField = merge({}, field, entries);

    return merge({}, state, {
        fields: merge({}, fields, {[name]: newField})
    });
}