var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Txai1990',
      database : 'loja'
    }
  });

  module.exports = knex;