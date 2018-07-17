module.exports.up = (knex) => {
  return knex.schema.createTable('round', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('user.id').unsigned().onDelete('CASCADE');
    table.timestamp('playedOn').defaultTo(knex.fn.now()).notNullable();
  })
};

module.exports.down = (knex) => {
  return knex.schema.dropTableIfExists('round');
};
