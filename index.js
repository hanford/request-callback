const window = require('global/window')

module.exports = requestCallback (callback) {
  if (window.requestIdleCallback) {
    return window.requestIdleCallback(callback)
  } else {
    return setTimeout(callback)
  }
}
