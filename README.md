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
});

freeSpace('c').then(bytes => {
    console.log('Free space: ' + prettyBytes(bytes));
});
```

## API
### freeSpace()
Returns the amount of free space for the default drive.

### freeSpace(disk)
Returns the amount of free space for a specified drive.

## License
MIT © [Knut Kirkhorn](LICENSE)