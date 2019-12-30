# graphql-pr-suntech

- Docker
- Graphql
- Nodejs
- React
- Apollo
- MariaDb

## Devops instructions

1 - Clone the project
2 - Build the Dockerfile: 'docker build -t suntech-nodejs-knex registry/nodejs-knex'
3 - Type 'docker-compose up'
4 - Config hosts:
  127.0.0.1   proxy.local.suntech.com 
  127.0.0.1   mariadb.local.suntech.com
  127.0.0.1   api.local.suntech.com
  127.0.0.1   spa.local.suntech.com
5 - Open 'http://spa.local.suntech.com/'