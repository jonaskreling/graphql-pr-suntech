import listUsers from '../../Infrastructure/listUsers'

export default async (obj, params, ctx) => {
  const users = await listUsers(ctx, { email: params.email,  })
  return users && users.length
}
