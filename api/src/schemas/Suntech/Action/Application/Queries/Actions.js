import listActions from '../../Infrastructure/listActions'

export default (obj, params, ctx) => {
  ctx.authorization(ctx, 'Action', params.filters !== undefined ? 'r' : 'b' )
  return listActions(ctx)
}
