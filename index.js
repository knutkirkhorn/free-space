'use strict';
const windows = require('./lib/windows.js');
const unix = require('./lib/unix.js');

module.exports = disk => {
    if (disk === undefined) {
        if (process.platform === 'win32') {
            //TODO: get the default disk
            //temporary set it to c: as it is common for windows drive
            disk = 'c';
        } else {
            disk = '';
        }   
    }

    if (typeof disk !== 'string') {
        throw new Error('Invalid input');
        return;
    }

    if (process.platform === 'win32') {
        return windows(disk);
    } else {
        return unix(disk);
    }
};