module.exports = Object.assign(
  {
    create: require('./create'),
    validate: require('./validate'),
    is: require('./is'),
    struct: require('./struct'),
    compose: require('./compose'),
    Maybe: require('./maybe'),
    Any: require('./any'),
    Dict: require('./dictionary')
  },
  require('./types')
)
