# request-callback

> defer heavy operations to when the browser has resources


## Install

```
$ npm install --save request-callback
```


## Usage

```js
const requestCallback = require('request-callback')

// defer heavy operations
function HeavyFn () {
  ..
}

requestCallback(heavyFn)
```


## API

### requestCallback(callback)

Invokes function on nextTick

## License

MIT © [Jack Hanford](https://jackhanford.com)
