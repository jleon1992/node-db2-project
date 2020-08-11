exports.up = function(knex, Promise) {
    return knex.schema.createTable("sales", tbl => {
      tbl.increments();
      tbl.text("Name_of_Purchaser").notNullable();
      tbl.text("Date").notNullable();
      tbl.text("Make").notNullable();
      tbl.text("Model").notNullable();
      tbl.text("Vin", 128).unique().notNullable();
      tbl.integer("Selling_Price").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sales");
  };