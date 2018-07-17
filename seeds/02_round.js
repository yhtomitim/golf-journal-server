
module.exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('round').del()
    .then(() => {
      // Inserts seed entries
      return knex('round').insert([
        {
          id: 1,
          user_id: '1',
          playedOn: '2018-07-04T08:30:00-07:00'

        },
        {
          id: 2,
          user_id: '2',
          playedOn: '2018-07-05T08:30:00-07:00'

        },
        {
          id: 3,
          user_id: '3',
          playedOn: '2018-07-06T08:30:00-07:00'

        }, {
          id: 4,
          user_id: '1',
          playedOn: '2018-07-11T08:30:00-07:00'

        },
        {
          id: 5,
          user_id: '2',
          playedOn: '2018-07-12T08:30:00-07:00'

        }, {
          id: 6,
          user_id: '3',
          playedOn: '2018-07-13T08:30:00-07:00'

        },
      ]);
    })
    .then(() => knex.raw('ALTER SEQUENCE round_id_seq RESTART WITH 7;'));
};
