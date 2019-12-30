import listUsers from '../../Infrastructure/listUsers'

export default (obj, params, ctx) => {
  return listUsers(ctx, params)
}
