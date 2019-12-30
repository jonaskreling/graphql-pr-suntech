import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col, Input, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import withFormik from './index.formik'
import { FieldLabel } from 'components'
import { ifProp } from 'styled-tools'
import MaskedInput from 'react-text-mask'

const StyledColRight = styled(Col)`
  text-align: right;
`

const StyledInput = styled(Input)`
  ${ifProp({ invalid: true }, 'border: 1px solid #f00 !important;', '')}
`

const StyledInputPassword = styled(Input.Password)`
  ${ifProp({ invalid: true }, 'border: 1px solid #f00 !important;', '')}
`

const StyledFieldLabelError = styled(FieldLabel)`
  font-size: 10px;
  color: #f00;
`

const FormUser = ({
  history, handleSubmit, values, setFieldValue, errors,
}) => {
  const salvar = () => {
    handleSubmit()
  }

  const goToBack = () => {
    history.push({ pathname: '/' })
  }

  const setPhoneNumber = (value) => {
    if (!value) {
      setFieldValue('phone', '')
      return
    }
    let onlyNumbers = value.match(/\d+/g).join('')
    if (onlyNumbers && onlyNumbers.length === values.phone.length) {
      onlyNumbers = onlyNumbers.substring(0, onlyNumbers.length - 1)
    }
    setFieldValue('phone', onlyNumbers.length > 10 ? onlyNumbers.substring(0, 10) : onlyNumbers)
  }

  const formatPhoneNumber = (value) => {
    const [a1 = '',a2 = '',a3 = '',a4 = '',a5 = '',a6 = '',a7 = '',a8 = '',a9 = '',a10 = ''] = value
    return `(${a1}${a2}) ${a3}${a4}${a5}${a6}-${a7}${a8}${a9}${a10}`
  }

  return (
    <>
      <Row gutter={5}>
        <Col xs={12}>
          <FieldLabel label="Nome" id="nome" />
          <StyledInput
            placeholder="Nome"
            value={values.name}
            onChange={event => setFieldValue('name', event.target.value)}
            invalid={!!errors.name}
          />
          {errors.name && <StyledFieldLabelError label={errors.name} />}
        </Col>
        <Col xs={12}>
          <FieldLabel label="Sobrenome" id="sobrenome" />
          <StyledInput
            placeholder="Sobrenome"
            value={values.surname}
            onChange={event => setFieldValue('surname', event.target.value)}
            invalid={!!errors.surname}
          />
          {errors.surname && <StyledFieldLabelError label={errors.surname} />}
        </Col>
      </Row>
      <br />
      <Row gutter={5}>
        <Col xs={12}>
          <FieldLabel label="E-mail" id="email" />
          <StyledInput
            placeholder="E-mail"
            value={values.email}
            onChange={event => setFieldValue('email', event.target.value)}
            invalid={!!errors.email}
          />
          {errors.email && <StyledFieldLabelError label={errors.email} />}
        </Col>
        <Col xs={12}>
          <FieldLabel label="Telefone" id="telefone" />
          <StyledInput
            placeholder="Telefone"
            value={formatPhoneNumber(values.phone)}
            onChange={event => setPhoneNumber(event.target.value)}
          />
          {errors.phone && <StyledFieldLabelError label={errors.phone} />}
        </Col>
      </Row>
      <br />
      <Row gutter={5}>
        <Col xs={8}>
          <FieldLabel label="Usuário" id="usuario" />
          <StyledInput
            placeholder="Usuário"
            value={values.username}
            onChange={event => setFieldValue('username', event.target.value)}
            invalid={!!errors.username}
          />
          {errors.username && <StyledFieldLabelError label={errors.username} />}
        </Col>
        <Col xs={8}>
          <FieldLabel label="Senha" id="senha" />
          <StyledInputPassword
            placeholder="Senha"
            value={values.password}
            onChange={event => setFieldValue('password', event.target.value)}
            invalid={!!errors.password}
          />
          {errors.password && <StyledFieldLabelError label={errors.password} />}
        </Col>
        <Col xs={8}>
          <FieldLabel label="Repita a senha" id="repetirsenha" />
          <StyledInputPassword
            placeholder="Repita a senha"
            value={values.passwordreplace}
            onChange={event => setFieldValue('passwordreplace', event.target.value)}
            invalid={!!errors.passwordreplace}
          />
          {errors.passwordreplace && <StyledFieldLabelError label={errors.passwordreplace} />}
        </Col>
      </Row>
      <br />
      <Row>
        <StyledColRight xs={24}>
          <Button onClick={goToBack}>Cancelar</Button>
          &nbsp;
          <Button type="primary" onClick={salvar}>Salvar</Button>
        </StyledColRight>
      </Row>
      <br />
    </>
  )
}

FormUser.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
}

export default withRouter(withFormik(FormUser))
