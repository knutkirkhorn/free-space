'use strict';
const { exec } = require('child_process');

module.exports = disk => {
    return new Promise((resolve, reject) => {
        //const command = `df -k | grep ^/dev/ | awk '{print $4}'`
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