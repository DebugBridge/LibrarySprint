
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_books_checkout').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_books_checkout').insert([
        { user_id: 1, book_id: 1, checkout_date: new Date().toISOString() },
        { user_id: 2, book_id: 5, checkout_date: new Date().toISOString() },
        { user_id: 3, book_id: 7, checkout_date: new Date().toISOString() },
      ]);
    });
};
