import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Heading, LoadingComplete, FormUser,
} from 'components'
import { notification } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { Users } from 'queries'
import { MergeUser } from 'mutations'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'

const StyledHeading = styled(Heading)`
  text-align: left;
`

const openNotificationWithIcon = (type, message, description) => {
  if (description) {
    notification[type]({ message, description })
  }
}

const ContentUser = ({ id, history, ...props }) => {
  const filtros = { id }
  const { data, loading, error } = useQuery(Users, { variables: { filtros, pagination: {} } })

  if (loading) return <LoadingComplete label="Carregando..." />
  if (error) return <LoadingComplete label="Houve um erro ao carregar os registros." />

  const prepararDados = (values) => {
    const {
      id, passwordreplace, deleted, createdat, enabled, ...restante
    } = values
    return { userInput: { id, userData: { ...restante } } }
  }

  const submit = (mergeUser, formProps) => {
    mergeUser({ variables: prepararDados(formProps.values) })
      .then((response) => {
        const { MergeUser } = response.data
        if (!MergeUser[0].id) {
          openNotificationWithIcon('error', 'Erro!', 'Não foi possível salvar o registro no sistema.')
          return
        }
        openNotificationWithIcon('success', 'Sucesso!', 'Registro salvo com sucesso!')
        history.push({ pathname: '/' })
      })
  }

  return (
    <div {...props}>
      <StyledHeading>
        {id ? 'Editar' : 'Novo'}
        &nbsp;
        Usuário
      </StyledHeading>
      <Mutation
        mutation={MergeUser}
        refetchQueries={[
          { query: Users, variables: { filtros: { name: '', username: '', email: '' }, paginacao: { } } },
        ]}
      >
        {mergeUser => (
          <FormUser
            user={(data.Users && id) ? data.Users[0] : {}}
            submit={form => submit(mergeUser, form)}
          />
        )}
      </Mutation>
    </div>
  )
}

ContentUser.propTypes = {
  id: PropTypes.number,
  history: PropTypes.object,
}

export default withRouter(ContentUser)
