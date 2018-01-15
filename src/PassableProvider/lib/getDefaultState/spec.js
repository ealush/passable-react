import getDefaultState from './index';

describe('Test getDefaultState function', () => {
    it('should return correct default state', () => {
        expect(getDefaultState()).toMatchSnapshot();
    })
});