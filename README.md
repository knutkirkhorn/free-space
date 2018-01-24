# free-space
> Get the amount of free space for a drive

## Installation
```
$ npm install free-space
```

## Usage
```js
const freeSpace = require('free-space');
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

## License
MIT © [Knut Kirkhorn](LICENSE)
