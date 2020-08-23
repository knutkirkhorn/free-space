const test = require('ava');
const freeSpace = require('.');

test('return a value', async t => {
    try {
        await freeSpace();
        t.pass();
    } catch (error) {
        t.fail();
    }
});

test('return a number', async t => {
    try {
        const bytes = await freeSpace();
        t.is(typeof bytes, 'number');
    } catch (error) {
        t.fail();
    }
});

test('wrong input', t => {
    const error = t.throws(() => {
        freeSpace([true, false]);
    }, {instanceOf: Error});
    t.is(error.message, 'Input disk should be of type `string`');
});