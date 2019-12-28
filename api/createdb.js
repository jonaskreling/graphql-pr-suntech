#!/usr/bin/env node

async function createDatabase() {
  const config = require(process.cwd() + '/knexfile')
  let knex
  if (process.env.APP_ENV === 'development') {
    config.development.connection.database = null
    knex = require('knex')(config.development)
  } else {
    config.production.connection.database = null
    knex = require('knex')(config.production)
  }
  await knex.raw('CREATE DATABASE IF NOT EXISTS suntech')
  await knex.destroy()
}

createDatabase()