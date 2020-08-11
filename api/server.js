const express = require('express');
const knex = require('knex')

const server = express();

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true
  });


server.use(express.json());

server.get('/', (req, res) => {
    db.select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json({ data: cars})
    })
    .catch(err => {
        console.log(err)
    })
})

server.post('/', (req, res) => {
    const car = req.body
    db('cars')
    .insert(car)
    .then(ids => {
        res.status(201).json({inserted: ids})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = server;
