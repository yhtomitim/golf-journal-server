
module.exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          uid: '1'
        },
        {
          id: 2,
          uid: '2'
        },
        {
          id: 3,
          uid: '3'
        }
      ]);
    })
    .then(() => knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 4;'));
};
