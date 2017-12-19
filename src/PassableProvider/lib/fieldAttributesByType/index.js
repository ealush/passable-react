const CHECKBOX = 'checkbox';
const RADIO = 'radio';
const ACCEPTING_CHECKED = [CHECKBOX, RADIO];

export default function fieldAttributesByType(field) {
    const attrs = {};
    if (ACCEPTING_CHECKED.includes(field.type)) { attrs.checked = field.checked; }
    attrs.value = field.value;
    return attrs;
}