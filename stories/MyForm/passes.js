export default function passes(formdata) {
    return (pass, enforce) => {
        pass('username', 'should be a string between 3 and 10 chars', () => {
            enforce(formdata.username.value).allOf({
                largerThanOrEquals: 5,
                smallerThanOrEquals: 10
            });
        });

        pass('phone', 'can either be a number, or empty', () => {
            enforce(parseInt(formdata.phone.value)).anyOf({
                isNumber: true,
                isEmpty: true
            });
        });
    };
}