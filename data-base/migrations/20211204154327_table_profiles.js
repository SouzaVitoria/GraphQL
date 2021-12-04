exports.up = function (knex) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary();
    table.string('name').notNull().unique();
    table.string('rotule').notNull();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("profiles")
};
