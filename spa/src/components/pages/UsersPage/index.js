import React from 'react'
import {
  PageTemplate, Header, Footer, UsersList,
} from 'components'

const UsersPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <UsersList />
    </PageTemplate>
  )
}

export default UsersPage
