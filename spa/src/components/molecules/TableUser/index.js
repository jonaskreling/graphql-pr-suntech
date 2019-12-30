import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, Menu, Dropdown, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

const formatPhoneNumber = phone => {
  var cleaned = ('' + phone).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

const TableUser = ({ users, history }) => {
  const menu = (id) => (
    <Menu>
      <Menu.Item>
        <a target="_blank" onClick={() => history.push({ pathname: '/usuario', search: `id=${id}` })}>
          Editar
        </a>
      </Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: (name, { surname }) => `${name} ${surname}`,
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
      render: phone => formatPhoneNumber(phone),
    },
    {
      title: 'Usuário',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Cadastro',
      dataIndex: 'createdat',
      key: 'createdat',
      render: created => (created && new Date(created).toLocaleDateString()) || '',
    },
    {
      title: 'Ativo',
      dataIndex: 'enabled',
      key: 'enabled',
      align: 'center',
      render: enabled => <Icon type={enabled ? 'check' : 'minus'} />
    }, {
      title: 'Ações',
      key: 'acoes',
      align: 'center',
      className: 'column-acoes',
      render: (text, record) => (
        <Dropdown overlay={menu(record.id)}>
          <Icon type="menu" />
        </Dropdown>
      ),
    },
  ]

  return (
    <Table columns={columns} dataSource={users} />
  )
}

TableUser.propTypes = {
  users: PropTypes.array,
  history: PropTypes.object,
}

export default withRouter(TableUser)
