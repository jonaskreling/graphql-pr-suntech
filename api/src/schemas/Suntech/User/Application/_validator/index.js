const userRules = [
  { key: 'name', test: 'length:1:50' },
  { key: 'surname', test: 'length:1:150' },
  { key: 'email', test: 'email' },
  { key: 'password', test: 'length:3:20' },
]

export default (ctx, params) => {
  ctx.validation(params, userRules)
  return true
}
