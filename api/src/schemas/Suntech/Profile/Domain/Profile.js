/* Definition */
const domainProfile = `
  type Profile {
    id: Int
    name: String!
    slug: String!
    actions: [Action]
  }
`

export const domain = `
  ${domainProfile}
`

/* QUERIES */
const queryProfile = `
  Profiles: [Profile]
`

export const queries = `
  ${queryProfile}
`

/* MUTATIONS */

/* INPUTS */
