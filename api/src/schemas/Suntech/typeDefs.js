import { directives } from './_definitions/Directives'
import { Pagination } from './_definitions/Filters/Filters'

import {
  domain as Action,
  queries as ActionQueries
} from './Action/Domain/Action'

import {
  domain as Profile,
  queries as ProfileQueries
} from './Profile/Domain/Profile'

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
${Action}
${Profile}
${User}

type Query {
  ${ActionQueries}
  ${ProfileQueries}
  ${UserQueries}
}

type Mutation {
  ${UserMutations}
}

${UserInputs}
${Pagination}
`
