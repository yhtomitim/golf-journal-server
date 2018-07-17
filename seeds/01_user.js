
module.exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          uid: 'thurley'
        },
        {
          id: 2,
          uid: 'bhurley'
        },
        {
          id: 3,
          uid: 'hhurley'
        }
      ]);
    })
    .then(() => knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 4;'));
};
