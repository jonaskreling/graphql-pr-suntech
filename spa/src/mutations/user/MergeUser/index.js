import { gql } from 'apollo-boost'

export default gql`
  mutation MergeUser(
    $userInput: userInput
  ) {
    MergeUser(
      userInput: $userInput
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
