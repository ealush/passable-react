export default function isAnObject(item) {
    return Object(item) === item && !Array.isArray(item);
}