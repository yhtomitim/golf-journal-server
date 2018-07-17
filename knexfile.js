
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///golf_journal'
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
