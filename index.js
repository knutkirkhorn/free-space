'use strict';
const systemDisk = require('system-disk');
const windows = require('./lib/windows.js');
const unix = require('./lib/unix.js');

module.exports = disk => {
    if (disk === undefined) {
        return new Promise((resolve, reject) => {
            systemDisk().then(newDisk => {
                disk = newDisk;
    
                if (process.platform === 'win32') {
                    resolve(windows(disk));
                } else {
                    resolve(unix(disk));
                }
            });
        });
    } else {
        if (typeof disk !== 'string') {
            throw new TypeError('Invalid input');
            return;
        }
    
        if (process.platform === 'win32') {
            return windows(disk);
        } else {
            return unix(disk);
        }
    }
};