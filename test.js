import test from 'ava';
import freeSpace from '.';

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
        t.is(error, 'asd')
        t.fail();
    }
});

test('wrong input', t => {
    const error = t.throws(() => {
        freeSpace([true, false]);
    }, Error);
    t.is(error.message, 'Invalid input');
});