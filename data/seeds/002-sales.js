
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {Name_of_Purchaser: "Beth J", date: 'March 3rd', Make: "Nissan", Model: "Altima", Vin: 'ds76f8a7sd6f78' , Selling_Price: 1565761},
        {Name_of_Purchaser: "Mike Z", date: 'May 5th', Make: "Honda", Model: "Accord", Vin: 'asdf7896asd89f6' , Selling_Price: 166542},
        {Name_of_Purchaser: "Loren B", date: 'June 12th', Make: "BMW", Model: "Z3", Vin: 'ds7f6asd87f6as78', Selling_Price: 100102},
        {Name_of_Purchaser: "Ricky M", date: 'December 1st', Make: "Jeep", Model: "Wrangler", Vin: 'asd789f6a78sdf6' , Selling_Price: 135000},
        {Name_of_Purchaser: "Samadhi S", date: 'January 23rd', Make: "Buggati", Model: "Veyron", Vin: 'asd8f79asd8f689', Selling_Price: 82000}
      ]);
    });
};
