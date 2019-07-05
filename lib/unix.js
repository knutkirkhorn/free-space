'use strict';
const {exec} = require('child_process');

module.exports = disk => {
    return new Promise((resolve, reject) => {
        exec(`df -k | grep ^${disk} | awk '{print $4}'`, (err, stdout, stderr) => {
            if (stderr) {
                reject(new Error('Something wrong happened'));
                return;
            }

            if (stdout.length === 0 || err) {
                reject(new Error('Could not find disk: ' + disk));
            }

            resolve(parseInt(stdout, 10) * 1024);
        });
    });
};