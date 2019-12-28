/* Definition */
const domainAction = `
  type Action {
    id: Int
    name: String!
    description: String!
    type: String!
  }
`

export const domain = `
  ${domainAction}
`

/* QUERIES */
const queryAction = `
  Actions: [Action]
`

export const queries = `
  ${queryAction}
`

/* MUTATIONS */

/* SUBSCRIPTIONS */

/* INPUTS */
