import passable, { enforce } from 'passable/dist/passable';

export default function passes({specific = [], data}) {
    return passable('myform', (test) => {
        test('username', 'should be a string between 3 and 10 chars', () => {
            enforce(data.username.value)
                .largerThanOrEquals(3)
                .smallerThanOrEquals(10);
        });

        test('phone', 'can either be a number, or empty', () => {
            enforce(parseInt(data.phone.value)).isNotEmpty();
        });

        test('phone', 'must resolve', new Promise((r) => setTimeout(r, 1500)));
    }, specific);
}