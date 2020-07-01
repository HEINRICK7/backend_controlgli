// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    
    useNullAsDefault: true,
  },
  staging: {
    client: 'postgresql',
    connection: {
      user : 'ptljfbkkuzoros',
      password : '66ff7cf68601679f014f73fd2e3cfc21b0da834f726bc99ec13ea936ed29f28c',
      database : 'dtbqt1dp9qua8',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      user : 'ptljfbkkuzoros',
      password : '66ff7cf68601679f014f73fd2e3cfc21b0da834f726bc99ec13ea936ed29f28c',
      database : 'dtbqt1dp9qua8',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
