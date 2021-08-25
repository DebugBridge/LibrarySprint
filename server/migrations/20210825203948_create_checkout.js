exports.up = function (knex) {
  return knex.schema.createTable('user_books_checkout', table => {
    table.increments('id')
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('book_id').unsigned().notNullable();
    table.foreign('book_id').references('id').inTable('books').onDelete('CASCADE');
    table.string('checkout_date');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_books_checkout');
};
