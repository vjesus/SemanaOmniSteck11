
exports.up = function(knex) {
    
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notnullabe();
        table.string('description').notnullabe();
        table.decimal('value').notnullabe();

        table.string('ong_id').notnullabe();

        table.foreing('ong_id').references('id').inTable('ongs');
     });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
