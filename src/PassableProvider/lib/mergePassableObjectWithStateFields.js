export default function mergePassableObjectWithStateFields(passableObject = {}, prevState) {
    const fields = prevState.fields;
    const tested = Object.keys(passableObject.testsPerformed);
    const mergedData = tested.reduce((accumulator, current) => {
        const passableField = passableObject.testsPerformed[current] || {};
        const fieldFromState = fields[current] || {};

        accumulator[current] = Object.assign({}, fieldFromState, {
            hasError: passableField.failCount > 0,
            hasWarning: passableField.warnCount > 0,
            errors: passableObject.validationErrors[current] || [],
            warnings: passableObject.validationWarnings[current] || []
        });
        return accumulator;
    }, {});

    return { fields: Object.assign({}, fields, mergedData) };
}