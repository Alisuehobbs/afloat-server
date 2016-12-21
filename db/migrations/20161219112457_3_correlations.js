exports.up = function(knex) {
    return knex.schema.createTable('correlations', (table) => {
        table.increments();
        table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer('mood_id').notNullable().references('id').inTable('user_moods').onDelete('CASCADE');
        table.integer('activity_id').notNullable().references('id').inTable('user_activities').onDelete('CASCADE');
        table.integer('weight').notNullable()
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('correlations')
}
