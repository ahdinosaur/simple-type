module.exports = Object.assign(
  {
    create: require('./create'),
    validate: require('./validate'),
    is: require('./is'),
    struct: require('./struct'),
    Maybe: require('./Maybe'),
    AnyOf: require('./AnyOf'),
    AllOf: require('./AllOf'),
    OneOf: require('./OneOf'),
    Dict: require('./Dict')
  },
  require('./types')
)
