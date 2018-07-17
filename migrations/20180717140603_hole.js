
module.exports.up = (knex) => {
  return knex.schema.createTable('hole', (table) => {
    table.increments('id').primary();
    table.integer('round_id').references('round.id').unsigned().onDelete('CASCADE');
    table.text('hole');
    table.text('par');
    table.text('score');
    table.text('notes');
  })
};

module.exports.down = (knex) => {
  return knex.schema.dropTableIfExists('hole');  
};
