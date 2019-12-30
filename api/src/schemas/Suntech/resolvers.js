import Date from './_definitions/Scalars/Date'
import { GraphQLUpload } from 'graphql-upload'
import QueriesUser from './User/Application/Queries'
import MutationsUser from './User/Application/Mutations'

export const resolvers = {
  Query: {
    ...QueriesUser,
  },
  Mutation: {
    ...MutationsUser,
  },
  Date,
  Upload: GraphQLUpload,
}
