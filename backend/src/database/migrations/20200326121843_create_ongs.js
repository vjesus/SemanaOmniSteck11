
exports.up = function(knex) {
    
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notnullabe();
        table.string('email').notnullabe();
        table.string('whatsapp').notnullabe();
        table.string('city').notnullabe();
        table.string('uf',2).notnullabe();
     });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');    
   
};
