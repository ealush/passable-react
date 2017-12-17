export default function inputAttributesByType(input) {
    const attrs = {};
    if (input.hasAttribute('checked')) { attrs.checked = input.checked; }
    if (input.hasAttribute('value'))   { attrs.value = input.value; }
    return attrs;
}