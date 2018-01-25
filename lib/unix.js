'use strict';
const exec = require('child_process').exec;

module.exports = disk => {
    return new Promise((resolve, reject) => {
        exec(`df -k | grep ^/dev/${disk} | awk '{print $4}'`, (err, stdout, stderr) => {
            if (stderr) {
                reject('Something wrong happened');
                return;
            }

            if (stdout.length == 0 || err) {
                reject('Could not find disk: ' + disk);
            }

            resolve(parseInt(stdout) * 1024);
        });
    });
};