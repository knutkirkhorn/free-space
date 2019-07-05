'use strict';
const {exec} = require('child_process');

module.exports = disk => {
    if (!disk.endsWith(':')) {
        disk += ':';
    }

    return new Promise((resolve, reject) => {
        exec(`wmic logicaldisk get freespace,caption | find "${disk}"`, (err, stdout, stderr) => {
            if (err || stderr) {
                if (err) {
                    reject(new Error('Could not find disk: ' + disk));
                    return;
                }

                reject(new Error('Something wrong happened'));
                return;
            }

            const bytes = stdout.split(disk)[1].replace(' ', '');
            resolve(parseInt(bytes, 10));
        });
    });
};