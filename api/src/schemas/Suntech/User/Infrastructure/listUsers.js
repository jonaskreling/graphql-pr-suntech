import { ApolloError } from 'apollo-server'

export default (ctx, params, listDeleted = false) => {
  var sql = ctx.knex('user as u')
    .select(
      'u.id as _id',
      'u.email as _email',
      'u.name as _name',
      'u.phone as _phone',
      'u.username as _username',
      'u.password as password',
      'u.deleted as _deleted',
      'u.enabled as _enabled',
      
      'p.idprofile as _profile__id',
      'p.name as _profile__name',
      'p.slug as _profile__slug',
      
      'a.id as _profile__actions__id',
      'a.name as _profile__actions__name',
      'a.description as _profile__actions__description',
      'a.type as _profile__actions__type',
    )
    .join('profile as p', 'u.idprofile', '=', 'p.id')
    .join('profileaction as pivot', 'pivot.idprofile', 'p.id')
    .join('action as a', 'pivot.idaction', 'a.id')
    .join(
      ctx.knex('user as u2')
        .select('u2.id as lids')
        .join('profile as p2', 'u2.idprofile', 'p2.id' )
        .join('profileaction as pivot2', 'pivot2.idprofile', 'p2.id')
        .join('action as a2', 'pivot2.idaction', 'a2.id')
        .where('p2.idprofile', '>=', ctx.user.profiles[0].id)
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.name) {
              queryBuilder.where('u2.name', 'like', `%${params.filters.name}%`)
          }
        })
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.username) {
              queryBuilder.where('u2.username', 'like', `%${params.filters.username}%`)
          }
        })
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.email) {
              queryBuilder.where('u2.email', 'like', `%${params.filters.email}%`)
          }
        })
        .modify(function(queryBuilder) {
          if (params.filters && params.filters.id) {
              queryBuilder.where('u2.id_user', '=', params.filters.id)
          }
        })
        .groupBy('u2.id')
        .limit(params.pagination && params.pagination.limit ? params.pagination.limit : 250)
        .offset(params.pagination && params.pagination.offset ? params.pagination.offset : 0)
        .as('x'),
      'x.lids',
      'u.id',
    )
    .where('u.deleted', '=', listDeleted)
  return (
    ctx.knexnest(sql).then((data) => {
      return data
    })
    .catch((e) => {throw new ApolloError(`Error nesting listUsers: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}
