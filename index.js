if (process.env.NODE_EVN === 'production') {
    module.exports = require('./dist/large-number.min.js')
} else {
    module.exports = require('./dist/large-number.js')
}
