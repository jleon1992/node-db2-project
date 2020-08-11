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

server.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body

    db('cars')
        .where({ id: id })
        .update(changes)
        .then(count => {
            if (count) {
                res.status(200).json({ message: "updated successfully" });
            } else {
                res.status(404).json({ message: "not found" });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });
})

server.delete('/:id', (req, res) => {
    const id = req.params.id
    db('cars')
        .where({ id: id })
        .delete()
        .then(count => {
            if (count) {
                res.status(200).json({ message: "removed successfully" });
            } else {
                res.status(404).json({ message: "not found" });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });

})

server.get('/sales', (req, res) => {
    db('sales')
        .then(sales => {
            res.status(200).json({ sales: sales})
        })
        .catch(err => {
            console.log(err)
        })
})

server.post('/sales', (req, res) => {
    const sale = req.body
    db('sales')
    .insert(sale)
    .then(ids => {
        res.status(201).json({inserted: ids})
    })
    .catch(err => {
        console.log(err)
    })
})

server.put('/sales/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body

    db('sales')
        .where({ id: id })
        .update(changes)
        .then(count => {
            if (count) {
                res.status(200).json({ message: "updated successfully" });
            } else {
                res.status(404).json({ message: "not found" });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });
})

server.delete('/sales/:id', (req, res) => {
    const id = req.params.id
    db('sales')
        .where({ id: id })
        .delete()
        .then(count => {
            if (count) {
                res.status(200).json({ message: "removed successfully" });
            } else {
                res.status(404).json({ message: "not found" });
            }
        })
        .catch(error => {
            console.log(error);

            res.status(500).json({ error: error.message });
        });

})
module.exports = server;
