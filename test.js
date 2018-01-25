import test from 'ava';
import m from '.';

test('return a value', t => {
    return m().then(bytes => {
        t.pass();
    }).catch(() => {
        t.fail();  
    });
});

test('return a number', t => {
    return m().then(bytes => {
        t.is(typeof bytes, 'number');
    }).catch(() => {
        t.fail();  
    });
});

test('wrong input', t => {
    const error = t.throws(() => {
        m([true, false])   
    }, Error);
    t.is(error.message, 'Invalid input');
});