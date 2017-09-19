const window = require('global/window')
const assert = require('assert')

module.exports = function requestCallback (callback) {
  assert(callback, 'callback must be defined')

  if (window.requestIdleCallback) {
    return window.requestIdleCallback(callback)
  } else {
    return setTimeout(callback)
  }
}
