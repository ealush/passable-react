import passable from 'passable';

export default function passes({ specific = [], data, custom }) {
    return passable('myform', specific, (pass, enforce) => {
        pass('username', 'should be a string between 3 and 10 chars', () => {
            enforce(data.username.value).allOf({
                largerThanOrEquals: 5,
                smallerThanOrEquals: 10
            });
        });

        pass('phone', 'can either be a number, or empty', () => {
            enforce(parseInt(data.phone.value)).allOf({
                isEmpty: false
            });
        });
    }, custom);
}