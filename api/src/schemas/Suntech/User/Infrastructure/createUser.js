import { ApolloError } from 'apollo-server'
import crypto from 'crypto'
import listUsers from './listUsers'

export default ({ userData }, ctx) => {
  const { password, ...dados } = userData
  return (
    ctx.knex('user')
      .insert({
        ...dados,
        password: crypto.createHmac('sha256', process.env.HASH_SECRET).update(password).digest('hex'),
      }, 'id')
      .then(data => {
        if(!data[0]) return null
        return listUsers(ctx, { filters: { id: data[0] } })
      })
      .catch(e => {
        if (e.code === 'ER_DUP_ENTRY') {
          throw new ApolloError('This user is already registered!', 'duplicated', [e.sqlMessage])
        }
        throw new ApolloError(`Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')
      })
  )
}
