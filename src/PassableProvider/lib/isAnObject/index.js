export default function isAnObject(item) {
    if (typeof item !== 'object') {
        return false;
    }

    if (Array.isArray(item)) {
        return false;
    }

    if (item instanceof Map || item instanceof WeakMap) {
        return false;
    }

    if (item instanceof Set || item instanceof WeakSet) {
        return false;
    }

    if (Object(item) === item) {
        return true;
    }

    return false;
}