/* Domains */
const domainUser = `
  type User {
    id: Int
    name: String!
    email: String!
    phone: String
    username: String!
    password: String! @hideTheField
    deleted: Boolean!
    enabled: Boolean!
    profiles: [Profile]
  }
`

const domainUserLogin = `
  type UserLogin {
    token: String
  }
`

export const domain = `
  ${domainUser}
  ${domainUserLogin}
`

/* QUERIES */
const queryUsers = `
  Users(
    filters: usersFilters
    pagination: pagination
  ): [User]
`

const queryUserLogin = `
  UserLogin (
    userLoginInput: userLoginInput
  ): UserLogin
`

const queryRefreshToken = `
  RefreshToken: UserLogin
`

export const queries = `
  ${queryUsers}
  ${queryUserLogin}
  ${queryRefreshToken}
`

/* MUTATIONS */
const mutationUser = `
  MergeUser (
    userInput: userInput
  ): [User]
`

const mutationToggleUser = `
  ToggleUser (
    id: Int!
  ): [User]
`

export const mutations = `
  ${mutationUser}
  ${mutationToggleUser}
`

/* SUBSCRIPTIONS */
export const UserSubscriptions = `
`

/* INPUTS */
const inputUserLogin = `
  input userLoginInput {
    email: String!
    password: String!
  }
`

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
    givenName: String!
    familyName: String!
    email: String!
    password: String!
    language: EnumLanguage!
    id_user_profile: Int!
    active: Boolean!
  }
`

export const inputs = `
  ${inputUserLogin}
  ${inputUserFilters}
  ${inputUserInput}
  ${inputUserData}
`
