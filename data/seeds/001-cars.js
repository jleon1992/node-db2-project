
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {Vin: "asd7f6a78s6df78", Make: "Nissan", Model: "Altima", Mileage: 1565761},
        {Vin: "das78sdf7fd9889", Make: "Honda", Model: "Accord", Mileage: 166542},
        {Vin: "g32jh4ghj25f23", Make: "BMW", Model: "Z3", Mileage: 100102},
        {Vin: "f7asd6fehwhwe", Make: "Jeep", Model: "Wrangler", Mileage: 135000},
        {Vin: "g23g4hjg237334", Make: "Buggati", Model: "Veyron", Mileage: 82000}
      ]);
    });
};
