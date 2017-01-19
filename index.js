module.exports = Object.assign(
  {
    create: require('./create'),
    validate: require('./validate'),
    is: require('./is'),
    struct: require('./struct'),
    compose: require('./compose'),
    Maybe: require('./maybe'),
    Some: require('./some'),
    Dict: require('./dictionary')
  },
  require('./types')
)
