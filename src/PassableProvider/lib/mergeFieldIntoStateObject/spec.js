import mergeFieldIntoState from './index';

describe('Test mergeFieldIntoState function', () => {
    it('should merge checked into field_1 inside the state', () => {
        expect(mergeFieldIntoState({
            "fields": {
                "username": {
                    "value": "Anyw",
                    "dirty": true,
                    "hasError": true,
                    "touched": true
                },
                "field_1": {
                    "some_prop": true
                }
            }
        }, 'field_1', {
            checked: true
        })).toEqual({
            "fields": {
                "username": {
                    "value": "Anyw",
                    "dirty": true,
                    "hasError": true,
                    "touched": true
                },
                "field_1": {
                    "checked": true,
                    "some_prop": true
                }
            }
        });
    });

    it('should create field with entries when not in state', () => {
        expect(mergeFieldIntoState({
            "fields": {
                "username": {
                    "value": "Anyw",
                    "dirty": true,
                    "hasError": true,
                    "touched": true
                }
            }
        }, 'field_1', {
            checked: true
        })).toEqual({
            "fields": {
                "username": {
                    "value": "Anyw",
                    "dirty": true,
                    "hasError": true,
                    "touched": true
                },
                "field_1": {
                    "checked": true
                }
            }
        });
    });

    it('should leave state unmodified when name is not provided or is null', () => {
        const state = {
            "fields": {
                "username": {
                    "value": "Anyw",
                    "dirty": true,
                    "hasError": true,
                    "touched": true
                }
            }
        };

        expect(mergeFieldIntoState(state, null, { checked: true })).toEqual(state);
        expect(mergeFieldIntoState(state)).toEqual(state);
        expect(mergeFieldIntoState(state, undefined, {value: 'no'})).toEqual(state);
    });
});