import deepassign from '@fiverr/futile/lib/deepassign';

export default function mergeFieldIntoStateObject(state = {}, name, entries = {}) {
    if (!name && name !== 0) { return state;}
    const fields = state.fields || {};
    const field = fields[name] || {};
    const newField = deepassign({}, field, entries);

    return deepassign({}, state, {
        fields: deepassign({}, fields, {[name]: newField})
    });
}