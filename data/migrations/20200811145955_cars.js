exports.up = function(knex, Promise) {
    return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.text("Vin", 128).unique().notNullable();
      tbl.text("Make").notNullable();
      tbl.text("Model").notNullable();
      tbl.integer("Mileage").notNullable();
      tbl.text('transmission type').notNullable().defaultTo('automatic');
      tbl.string('title status').notNullable().defaultTo('unknown');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
  };