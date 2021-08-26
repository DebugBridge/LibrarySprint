exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.string('username');
});

exports.down = (knex) => knex.schema.dropTableIfExists('users');
