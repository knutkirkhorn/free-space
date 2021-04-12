'use strict';

const {exec} = require('child_process');

module.exports = disk => new Promise((resolve, reject) => {
    // Output of command: "Filesystem | 1K-blocks | Used | Available | Use% | Mounted on"
    exec('df -k', (err, stdout, stderr) => {
        if (stderr) {
            reject(new Error('Something wrong happened'));
            return;
        }

        if (stdout.length === 0 || err) {
            reject(new Error(`Could not find disk: ${disk}`));
            return;
        }

        // Get every line from output and remove whitespace between data in each line
        const freeDiskSpaces = stdout.split('\n').slice(1).map(currentDisk => {
            const diskProperties = currentDisk.split(' ');

            return diskProperties.filter(element => element !== '');
        });

        const selectedDisk = freeDiskSpaces.find(currentDisk => currentDisk[0] === disk);

        if (!selectedDisk) {
            reject(new Error(`Could not find disk: ${disk}`));
            return;
        }

        const availableDiskSpace = selectedDisk[3];

        resolve(parseInt(availableDiskSpace, 10) * 1024);
    });
});
