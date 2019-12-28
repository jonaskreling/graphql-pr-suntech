import listProfile from '../../Infrastructure/listProfile'

export default async (obj, params, ctx) => {
  ctx.authorization(ctx, 'Profile', params.filters !== undefined ? 'r' : 'b' )
  return listProfile(ctx)
}
