'use strict';
const windows = require('./lib/windows.js');

module.exports = disk => {
    if (disk === undefined) {
        //TODO: get the default disk
        //temporary set it to c: as it is common for windows drive
        disk = 'c';
    }

    switch (process.platform) {
        case 'win32':
            return windows(disk);
            break;
        case 'darwin':
            throw new Error('Not implemented');
            break;
        case 'linux':
            throw new Error('Not implemented');
            break;
    }
};