/* Domains */
const domainUser = `
  type User {
    id: Int
    name: String!
    surname: String!
    email: String!
    phone: String
    username: String!
    password: String! @hideTheField
    deleted: Boolean!
    enabled: Boolean!
    createdat: Date
  }
`

export const domain = `
  ${domainUser}
`

/* QUERIES */
const queryUsers = `
  Users(
    filtros: usersFilters
    pagination: pagination
  ): [User]
`

const queryHasEmail = `
  HasEmail(
    filtros: usersFilters
  ): Boolean
`

export const queries = `
  ${queryUsers}
  ${queryHasEmail}
`

/* MUTATIONS */
const mutationUser = `
  MergeUser (
    userInput: userInput
  ): [User]
`

export const mutations = `
  ${mutationUser}
`

/* SUBSCRIPTIONS */
export const UserSubscriptions = `
`

/* INPUTS */
const inputUserFilters = `
  input usersFilters {
    id: Int
    name: String
    username: String
    email: String
  }
`

const inputUserInput = `
  input userInput {
    id: Int
    delete: Boolean
    userData: userData
  }
`

const inputUserData = `
  input userData {
    name: String
    surname: String
    email: String
    phone: String
    username: String
    password: String
    enabled: Boolean
  }
`

export const inputs = `
  ${inputUserFilters}
  ${inputUserInput}
  ${inputUserData}
`
