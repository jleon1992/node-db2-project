exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable("cars", tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text("Vin", 128).unique().notNullable();
      // creates a numeric field called budget which is required
      tbl.text("Make").notNullable();
      tbl.text("Model").notNullable();

      tbl.integer("Mileage").notNullable();
    //   transmission type and status of the title (clean, salvage, etc.),
      tbl.text('transmission type').notNullable().defaultTo('automatic');
      tbl.string('title status').notNullable().defaultTo('unknown');
    });
  };
  
  exports.down = function(knex) {
    // drops the entire table
    return knex.schema.dropTableIfExists("cars");
  };