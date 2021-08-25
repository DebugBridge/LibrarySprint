const faker = requie('faker');

const createFakeBook = () => ({
  tite: `The ${faker.random.word()} of the ${faker.random.word()} ${faker.random.word()}`,
  author: `${faker.name.lastName()}, ${faker.name.firstName()}`,
  isbn: faker.datatype.number()
})

const fakeBooks = []

for (let i = 0; i < 1000; i++) {
  fakeBooks.push(createFakeBook())
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert(
        fakeBooks
        //   [
        //   { title: 'Harry Potter and Sourcer\'s Stone', author: 'J.K. Rowling', isbn: '9780590353403' },
        //   { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', isbn: '9780317456394' },
        //   { title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', isbn: '9780195799156' },
        //   { title: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling', isbn: '9780195799163' },
        //   { title: 'Harry Potter and the Order of the Phoenix', author: 'J.K. Rowling', isbn: '9780320048395' },
        //   { title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling', isbn: '9780329414382' },
        //   { title: 'Harry Potter nd the Deathly Hallows', author: 'J.K. Rowling', isbn: '9781526618344' },

        // ]
      );
    });
};
