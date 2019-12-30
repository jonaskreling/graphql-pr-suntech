import { directives } from './_definitions/Directives'
import { Pagination } from './_definitions/Filters/Filters'

import {
  domain as User, 
  queries as UserQueries, 
  mutations as UserMutations, 
  inputs as UserInputs
} from './User/Domain/User'

export const typeDefs = `
${directives}

scalar Date
scalar Upload
${User}

type Query {
  ${UserQueries}
}

type Mutation {
  ${UserMutations}
}

${UserInputs}
${Pagination}
`
