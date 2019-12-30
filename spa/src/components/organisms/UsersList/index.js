import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Heading, TableUser, LoadingComplete, FilterUser,
} from 'components'
import { useQuery } from '@apollo/react-hooks'
import { Users } from 'queries'

const StyledHeading = styled(Heading)`
  text-align: left;
`

const UsersList = ({ ...props }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const filtros = { name, username, email }
  const { data, loading, error } = useQuery(Users, { variables: { filtros, pagination: {} }, fetchPolicy: 'no-cache' })

  if (loading) return <LoadingComplete label="Carregando..." />
  if (error) return <LoadingComplete label="Houve um erro ao carregar os registros." />

  return (
    <div {...props}>
      <StyledHeading>Lista de usuários</StyledHeading>
      <FilterUser
        setName={setName}
        setUsername={setUsername}
        setEmail={setEmail}
        name={name}
        username={username}
        email={email}
      />
      <TableUser users={data.Users ? data.Users : []} />
    </div>
  )
}

export default UsersList
