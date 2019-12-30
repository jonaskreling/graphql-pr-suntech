import { ApolloError } from 'apollo-server'

export default (ctx, params) => {
  var sql = ctx.knex('user as u')
    .select(
      'u.id as _id',
      'u.email as _email',
      'u.name as _name',
      'u.surname as _surname',
      'u.phone as _phone',
      'u.username as _username',
      'u.password as password',
      'u.deleted as _deleted',
      'u.enabled as _enabled',
      'u.createdat as _createdat',
    )
    .where('u.deleted', '=', 0)
  params.filtros && params.filtros.id ? sql.andWhere('u.id', params.filtros.id) : true
  params.filtros && params.filtros.name ? sql.andWhereRaw(`CONCAT_WS(' ', u.name, u.surname) LIKE ?`, [`%${params.filtros.name}%`]) : true
  params.filtros && params.filtros.username ? sql.andWhere('u.username', 'LIKE', `%${params.filtros.username}%`) : true
  params.filtros && params.filtros.email ? sql.andWhere('u.email', 'LIKE', `%${params.filtros.email}%`) : true
  return (
    ctx.knexnest(sql)
      .then((data) => {
        return data
      })
      .catch((e) => {throw new ApolloError(`Error nesting listUsers: ${e.code} - ${e.message}`, 'knexnest_error')})
  )
}
