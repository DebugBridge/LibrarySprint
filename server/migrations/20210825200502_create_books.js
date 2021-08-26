exports.up = (knex) => knex.schema.createTable('books', (table) => {
    table.increments('id');
    table.string('title');
    table.string('author');
    table.string('isbn');
});

exports.down = (knex) => knex.schema.dropTableIfExists('books');
