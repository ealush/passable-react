import isAnObject from './index';

describe('Test isAnObject function', () => {
    it('should return true for an Object', () => {
        expect(isAnObject({})).toBe(true);
        expect(isAnObject({ a: '1' })).toBe(true);
        expect(isAnObject(global)).toBe(true);
    });

    it('should return false for an Array', () => {
        expect(isAnObject([])).toBe(false);;
    });

    it('should return false for a Function', () => {
        expect(isAnObject(new Function())).toBe(false);
    });

    it('should return false for a Map', () => {
        expect(isAnObject(new Map())).toBe(false);
    });

    it('should return false for a Set', () => {
        expect(isAnObject(new Set())).toBe(false);
    });

    it('should return false for a WeakMap', () => {
        expect(isAnObject(new WeakMap())).toBe(false);
    });

    it('should return false for a WeakSet', () => {
        expect(isAnObject(new WeakSet())).toBe(false);
    });

    it('should return false for a String', () => {
        expect(isAnObject(new String('hi'))).toBe(false);
    });

    it('should return false for a Number', () => {
        expect(isAnObject(new Number(1))).toBe(false);
    });

    it('should return false for a Boolean', () => {
        expect(isAnObject(new Boolean(true))).toBe(false);
    });

    it('should return false for primitive literals types', () => {
        expect(isAnObject(1)).toBe(false);
        expect(isAnObject('hi')).toBe(false);
        expect(isAnObject(null)).toBe(false);
        expect(isAnObject(true)).toBe(false);
        expect(isAnObject(false)).toBe(false);
        expect(isAnObject(undefined)).toBe(false);
        expect(isAnObject(Symbol())).toBe(false);
    });
});