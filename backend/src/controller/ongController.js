const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs  = await connection('ongs').select('*');
    
        return response.json(ongs);
    
    },

    async create(request, response) {
        //console.log('Começou Create');
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
        
        //console.log('Vou gravar');
        //console.log(id,name,email,whatsapp,city,uf);

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });

    }
        
};

