'use strict';

const systemDisk = require('system-disk');
const windows = require('./lib/windows.js');
const unix = require('./lib/unix.js');

module.exports = disk => {
    if (disk === undefined) {
        return new Promise(resolve => {
            systemDisk().then(newDisk => {
                if (process.platform === 'win32') {
                    resolve(windows(newDisk));
                } else {
                    resolve(unix(newDisk));
                }
            });
        });
    }

    if (typeof disk !== 'string') {
        throw new TypeError('Input disk should be of type `string`');
    }

    if (process.platform === 'win32') {
        return windows(disk);
    }

    return unix(disk);
};
