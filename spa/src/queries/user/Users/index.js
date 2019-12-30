import { gql } from 'apollo-boost'

export default gql`
  query Users(
    $filtros: usersFilters
    $pagination: pagination
  ) {
    Users(
      filtros: $filtros
      pagination: $pagination
    ) {
      id
      name
      surname
      email
      phone
      username
      deleted
      enabled
      createdat
    }
  }
`
