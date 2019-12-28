import { ApolloError } from 'apollo-server'
import listUsers from './listUsers'

export default (ctx, id) => {
  return (
    ctx.knex('user')
      .update({
        deleted: 1,
        enabled: 0,
        deletedby: ctx.user.id,
        deletedat: ctx.knex.fn.now(),
      })
      .where('id', '=', id)
      .then(() => {
        return listUsers(ctx, { filters: { id } }, true)
      })
      .catch((e) => {throw new ApolloError(`Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')})
  )
}
