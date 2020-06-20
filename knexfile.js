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
      user : 'qtgefewqxjexnz',
      password : '71d7d62a3d4fbcb6ba12e45fc9707183a5096a5d77880cc232e4e32d41860553',
      database : 'da8qkbdrutvt6e',
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
      user : 'qtgefewqxjexnz',
      password : '71d7d62a3d4fbcb6ba12e45fc9707183a5096a5d77880cc232e4e32d41860553',
      database : 'da8qkbdrutvt6e',
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
