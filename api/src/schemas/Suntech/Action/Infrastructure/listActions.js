import { ApolloError } from 'apollo-server'

const listActions = (ctx) => {
  var sql = ctx.knex('action as a')
    .select(
      'a.id as _id',
      'a.name as _name',
      'a.description as _description',
      'a.type as _type',
    )
  return (
    ctx.knexnest(sql)
      .then((data) => {
        return data
      })
      .catch((e) => {throw new ApolloError(`Error nesting listActions: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default listActions
