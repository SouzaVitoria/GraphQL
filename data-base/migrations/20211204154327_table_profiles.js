exports.up = function (knex) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary();
    table.string('name').notNull().unique();
    table.string('rotule').notNull();
  }).then(function () {
    return knex('profiles').insert([
      { name: 'comum', rotule: 'Comum' },
      { name: 'admin', rotule: 'Admin' },
      { name: 'master', rotule: 'Master' }
    ])
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profiles")
};
