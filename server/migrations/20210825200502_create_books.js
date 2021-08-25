
exports.up = function (knex) {
  return knex.schema.createTable('books', table => {
    table.increments('id');
    table.string('title');
    table.string('author');
    table.string('isbn');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('books');
};
