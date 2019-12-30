import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col, Input, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { FieldLabel } from 'components'

const StyledColRight = styled(Col)`
  text-align: right;
`

const FilterUser = ({
  setName,
  setUsername,
  setEmail,
  name,
  username,
  email,
  history,
}) => {
  const [nameField, setNameField] = useState(name)
  const [usernameField, setUsernameField] = useState(username)
  const [emailField, setEmailField] = useState(email)

  const limpar = () => {
    setName('')
    setUsername('')
    setEmail('')
    setNameField('')
    setUsernameField('')
    setEmailField('')
  }

  const buscar = () => {
    setName(nameField)
    setUsername(usernameField)
    setEmail(emailField)
  }

  const goToNovo = () => {
    history.push({ pathname: '/usuario' })
  }

  return (
    <>
      <Row gutter={5}>
        <Col xs={8}>
          <FieldLabel label="Nome" id="nome" />
          <Input
            placeholder="Nome"
            value={nameField}
            onChange={event => setNameField(event.target.value)}
          />
        </Col>
        <Col xs={8}>
          <FieldLabel label="E-mail" id="email" />
          <Input
            placeholder="Email"
            value={emailField}
            onChange={event => setEmailField(event.target.value)}
          />
        </Col>
        <Col xs={8}>
          <FieldLabel label="Usuário" id="usuario" />
          <Input
            placeholder="Usuário"
            value={usernameField}
            onChange={event => setUsernameField(event.target.value)}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <StyledColRight xs={24}>
          <Button onClick={limpar}>Limpar</Button>
          &nbsp;
          <Button onClick={goToNovo}>Novo</Button>
          &nbsp;
          <Button type="primary" onClick={buscar}>Buscar</Button>
        </StyledColRight>
      </Row>
      <br />
    </>
  )
}

FilterUser.propTypes = {
  setName: PropTypes.func,
  setUsername: PropTypes.func,
  setEmail: PropTypes.func,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  history: PropTypes.object,
}

export default withRouter(FilterUser)
