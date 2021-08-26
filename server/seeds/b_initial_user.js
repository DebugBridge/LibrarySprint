const faker = require('faker');

const createFakeUser = () => ({
    username: faker.animal.cetacean(),
});

const fakeUsers = [];

for (let i = 0; i < 30; i += 1) {
    fakeUsers.push(createFakeUser());
}

exports.seed = (knex) => knex('users').del()
    .then(() => knex('users').insert(fakeUsers));
