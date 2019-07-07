'use strict';
const {exec} = require('child_process');

module.exports = disk => {
    if (!disk.endsWith(':')) {
        disk += ':';
    }

    return new Promise((resolve, reject) => {
        exec('wmic logicaldisk get freespace,caption', (err, stdout, stderr) => {
            if (err || stderr) {
                if (err) {
                    reject(err);
                    return;
                }

                reject(new Error('Something wrong happened'));
                return;
            }

            // Regex for matching the given disk and the number of bytes
            const diskRegex = new RegExp(`${disk} +\\d+`, 'gi'); // => `/disk +\d+/gi`
            const bytes = stdout.match(diskRegex)[0].match(/\d+/gi)[0];
            resolve(parseInt(bytes, 10));
        });
    });
};