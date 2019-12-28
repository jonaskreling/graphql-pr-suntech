import Date from './_definitions/Scalars/Date'
import { GraphQLUpload } from 'graphql-upload'
import QueriesAction from './Action/Application/Queries'
import QueriesProfile from './Profile/Application/Queries'
import QueriesUser from './User/Application/Queries'
import MutationsUser from './User/Application/Mutations'

export const resolvers = {
  Query: {
    ...QueriesAction,  
    ...QueriesProfile,
    ...QueriesUser,
  },
  Mutation: {
    ...MutationsUser,
  },
  Date,
  Upload: GraphQLUpload,
}
