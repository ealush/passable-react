export default function mergeInField(fieldObject = {}, entries = {}) {
    return Object.assign({}, fieldObject, entries);
}