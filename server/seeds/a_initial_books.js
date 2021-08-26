const faker = require('faker');

const createFakeBook = () => ({
  title: `The ${faker.random.word()} of the ${faker.random.word()} ${faker.random.word()}`,
  author: `${faker.name.lastName()}, ${faker.name.firstName()}`,
  isbn: faker.datatype.number(),
});

const fakeBooks = [];

for (let i = 0; i < 1000; i += 1) {
  fakeBooks.push(createFakeBook());
}

exports.seed = (knex) => knex('books').del()
  .then(() => knex('books').insert(fakeBooks));
