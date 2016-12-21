exports.up = function(knex) {
    return knex.schema.createTable('user_moods', (table) => {
        table.increments();
        table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('mood').notNullable();
        table.integer('rating').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('user_moods')
}
