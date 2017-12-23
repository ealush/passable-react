export default function isAnObject(item) {
    if (typeof item !== 'object') {
        return false;
    }

    if (Array.isArray(item)) {
        return false;
    }

    if ([
        Map,
        WeakMap,
        Set,
        WeakSet,
        Number,
        String,
        Boolean,
    ].some((type) => item instanceof type)) {
        return false;
    }

    if (Object(item) === item) {
        return true;
    }

    return false;
}