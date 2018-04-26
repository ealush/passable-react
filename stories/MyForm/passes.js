import passable, { enforce } from 'passable';

export default function passes({ specific = [], data }) {
    return passable('myform', (test) => {
        test('username', 'should be a string between 3 and 10 chars', () => {
            enforce(data.username.value)
                .largerThanOrEquals(5)
                .smallerThanOrEquals(10);
        });

        test('phone', 'can either be a number, or empty', () => {
            enforce(parseInt(data.phone.value)).isNotEmpty();
        });
    }, specific);
}