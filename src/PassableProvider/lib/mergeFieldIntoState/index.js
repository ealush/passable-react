export default function mergeFieldIntoState(state = {}, name, entries = {}) {
    if (!name && name !== 0) { return state;}
    const fields = state.fields || {};
    const field = fields[name] || {};
    const newField = Object.assign({}, field, entries);

    return Object.assign({}, state, {
        fields: Object.assign({}, fields, {[name]: newField})
    });
}