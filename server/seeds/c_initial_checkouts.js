exports.seed = (knex) => knex('user_books_checkout').del()
    .then(() => knex('user_books_checkout').insert([
        { book_id: 5, user_id: 9 },
        { book_id: 6, user_id: 8 },
        { book_id: 8, user_id: 4 },
        { book_id: 9, user_id: 2 },
        { book_id: 3, user_id: 2 },
        { book_id: 5, user_id: 10 },
    ]));
