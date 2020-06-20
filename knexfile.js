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
      user : 'qwyvyibwglthke',
      password : 'ca5641a8092ddc3b6e47ba9f4407f8a9578ec96b85a33909d198d101c91fff9a',
      database : 'd4n4c19b3n3t7l',
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
    user : 'qwyvyibwglthke',
    password : 'ca5641a8092ddc3b6e47ba9f4407f8a9578ec96b85a33909d198d101c91fff9a',
    database : 'd4n4c19b3n3t7l',
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
