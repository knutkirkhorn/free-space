# free-space
> Get the amount of free space for a drive

## Installation
```
$ npm install @knutkirkhorn/free-space
```

## Usage
```js
const freeSpace = require('@knutkirkhorn/free-space');
const prettyBytes = require('pretty-bytes');

freeSpace().then(bytes => {
    console.log('Free space: ' + prettyBytes(bytes));
    // => Free space: 39.6 GB
});

freeSpace('c').then(bytes => {
    console.log('Free space: ' + prettyBytes(bytes));
    // => Free space: 39.6 GB
});
```

## API
### freeSpace()
Returns the amount of free space for the default drive.

### freeSpace(drive)
Returns the amount of free space for a specified `drive`.

## Related
- [system-disk](https://github.com/knutkirkhorn/system-disk) - Get the system disk of the computer (e.g. `C:` or `/dev/sda`)
- [@knutkirkhorn/free-space-cli](https://github.com/knutkirkhorn/free-space-cli) - CLI for this module

## License
MIT © [Knut Kirkhorn](LICENSE)
