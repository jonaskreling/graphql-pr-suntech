import { ApolloError } from 'apollo-server'

export default (ctx, email, password) => {
  var sql = ctx.knex('user as u')
    .select(
      'u.id_user as _id',
      'u.name as _name',
      'u.email as _email',
      'u.phone as _phone',
      'u.username as _username',
      'u.password as _password',
      'u.enabled as _enabled',
      
      'p.id as _profile__id',
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
    .where('u.deleted', '=', 0)
    .andWhere('u.enabled', '=', 1)
    .andWhere('u.email', '=', email)
    .andWhere('u.password', '=', password)
  return (
    ctx.knexnest(sql).then((data) => {
      return data
    })
    .catch((e) => {throw new ApolloError('knexnest_error', 400, [`Error nesting findUserByEmailAndPassword: ${e.code} - ${e.message}`])})
  )
}
