import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './Suntech/typeDefs'
import { resolvers } from './Suntech/resolvers'
import { schemaDirectives } from './Suntech/_definitions/Directives'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives,
})
