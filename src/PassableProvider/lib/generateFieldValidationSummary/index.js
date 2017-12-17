export default function generateFieldValidationSummary(passableField = {}) {
    return {
        hasError: passableField.failCount > 0,
        hasWarning: passableField.warnCount > 0
    }
}