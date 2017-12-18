import isAnObject from './index';

test('isAnObject returns true for an Object', () => {
    expect(isAnObject({})).toBe(true)
    expect(isAnObject({a: '1'})).toBe(true)
    expect(isAnObject(global)).toBe(true)
});

test('isAnObject returns false for an Array', () => {
    expect(isAnObject([])).toBe(false)
});

test('isAnObject returns false for a Function', () => {
    expect(isAnObject(new Function())).toBe(false)
});

test('isAnObject returns false for a Map', () => {
    expect(isAnObject(new Map())).toBe(false)
});

test('isAnObject returns false for a Set', () => {
    expect(isAnObject(new Set())).toBe(false)
});

test('isAnObject returns false for a WeakMap', () => {
    expect(isAnObject(new WeakMap())).toBe(false)
});

test('isAnObject returns false for a WeakSet', () => {
    expect(isAnObject(new WeakSet())).toBe(false)
});

test('isAnObject returns false for other types', () => {
    expect(isAnObject(1)).toBe(false)
    expect(isAnObject('hi')).toBe(false)
    expect(isAnObject(null)).toBe(false)
    expect(isAnObject(true)).toBe(false)
    expect(isAnObject(false)).toBe(false)
    expect(isAnObject(undefined)).toBe(false)
    expect(isAnObject(Symbol())).toBe(false)
});