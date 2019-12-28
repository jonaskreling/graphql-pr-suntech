import { ApolloError } from 'apollo-server'

const listaPerfis = (ctx) => {
  var sql = ctx.knex('profile as p')
    .select(
      'p.id as _id',
      'p.name as _name',
      'p.slug as _slug',

      'a.id as _actions__id',
      'a.name as _actions__name',
      'a.description as _actions__description',
    )
    .join('profileaction as pivot', 'pivot.idprofile', 'p.id')
    .join('action as a', 'pivot.idaction', 'a.id')
  return (
    ctx.knexnest(sql).then((data) => {
      return data
    })
    .catch((e) => {throw new ApolloError(`Error nesting listaPerfis: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}

export default listaPerfis
