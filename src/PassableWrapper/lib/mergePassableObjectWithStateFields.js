export default function mergePassableObjectWithStateFields(passableObject = {}, prevState) {
    const fields = prevState.fields;
    const tested = Object.keys(passableObject.testsPerformed);
    const mergedData = tested.reduce((accumulator, current) => {
        const existingField = fields[current] || {};
        const currentobject = prevState[current] || {};

        accumulator[current] = Object.assign({}, existingField, {
            hasError: !currentobject.failCount,
            hasWarning: !currentobject.warnCount,
            errors: passableObject.validationErrors[current],
            warnings: passableObject.validationWarnings[current]
        });
        return accumulator;
    }, {});

    return { fields: Object.assign({}, fields, mergedData) };
}