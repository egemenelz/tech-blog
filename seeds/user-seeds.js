const { User } = require('../models');

const userData = [
    {
        username:"egemeneliz",
        email:"egemeneliz@test.com",
        password:"egemen1234"
    },
    {
        username:"egemeneliz2",
        email:"egemeneliz2@test.com",
        password:"egemen1234"
    },
    {
        username:"egemeneliz3",
        email:"egemeneliz3@test.com",
        password:"egemen1234"
    },
    {
        username:"egemeneliz4",
        email:"egemeneliz4@test.com",
        password:"egemen1234"
    },
    {
        username:"egemeneliz5",
        email:"egemeneliz5@test.com",
        password:"egemen1234"
    }
    ,{
        username:"egemeneliz6",
        email:"egemeneliz6@test.com",
        password:"egemen1234"
    }
];



const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
