export default function generateFieldValidationSummary(passableField) {
    passableField = passableField || {};
    return {
        hasError: passableField.failCount > 0,
        hasWarning: passableField.warnCount > 0
    }
}