const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();
        
        const incidents  = await connection('incidents')
        .join('ongs', 'ongs.Id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.id',
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);
    
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    
    },
    
    async create(request, response) {
        const {title,description,value} = request.body;
        const ong_id = request.headers.authorization;

        const[id] =await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });

    },
    
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        console.log('Vou deletar');

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

            console.log('Achei o id');

        if (incidents.ong_id != ong_id) {
            console.log('comparei e é diferente');
            return response.status(401).json({error: 'Operation not permitted.'});
        }

        Console.log('Comparei e é igual');

        await connection('incidents').where('id',id).delete();
        console.log('Deletei');
        
        return response.status(204).send;

    }
};
