import React from 'react'
import PropTypes from 'prop-types'
import {
  PageTemplate, Header, Footer, ContentUser,
} from 'components'

const UsersPage = ({ location }) => {
  const { search } = location
  const [, id] = search.replace('?', '').split('=')
  console.log({ id })
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <ContentUser id={!id ? null : parseInt(id, 10)} />
    </PageTemplate>
  )
}

UsersPage.propTypes = {
  location: PropTypes.object,
}

export default UsersPage
