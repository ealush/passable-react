const CHECKBOX = 'checkbox';
const RADIO = 'radio';
const ACCEPTING_CHECKED = [CHECKBOX, RADIO];

export default function inputAttributesByType(input) {
    const attrs = {};
    if (ACCEPTING_CHECKED.includes(input.type)) { attrs.checked = input.checked; }
    attrs.value = input.value;
    return attrs;
}