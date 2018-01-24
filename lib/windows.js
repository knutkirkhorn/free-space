'use strict';
const { exec } = require('child_process');

module.exports = disk => {
    return new Promise((resolve, reject) => {
        exec('fsutil volume diskfree ' + disk + ':', (err, stdout, stderr) => {
            if (err || stderr) {
                if (err) {
                    reject('Could not find disk: '+  disk);
                    return;
                }
                reject('Something wrong happened');
                return;
            }

            const bytes = stdout.split('\n')[0].split('Total # of free bytes        :')[1];
            resolve(parseInt(bytes));
        });
    });
};