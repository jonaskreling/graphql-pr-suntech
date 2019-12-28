import { ApolloError } from 'apollo-server'
import crypto from 'crypto'
import listUsers from './listUsers'

const alterarUsuario = ({ id, userData }, ctx) => {
  const { password, ...dados } = userData
  return (
    ctx.knex('user')
      .update({
        ...dados,
        password: userData.password && crypto.createHmac('sha256', process.env.HASH_SECRET).update(password).digest('hex'),
        updated_by: ctx.user.id,
      })
      .where('id_user', '=', id)
      .then(() => {
        return listUsers(ctx, { filters: { id } })
      })
      .catch((e) => {
        if (e.code === 'ER_DUP_ENTRY') {
          throw new ApolloError('This user is already registered!', 'duplicated', [e.sqlMessage])
        }
        throw new ApolloError(`Something went wrong with db: ${e.code} - ${e.message}`, 'database_error')
      })
  )
}

export default alterarUsuario
