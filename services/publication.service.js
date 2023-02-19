const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PublicationsService {
    constructor(){
        this.publicatios = [];
    }
    async create(data) {
        const newPublication = await models.Publication.create(data);
        return newPublication;
    }
  
    async find() {
        const rta = await models.Publication.findAll({
            include : [{
                as: 'user',
                model: models.User,
                attributes: ['name', 'lastName', 'role']
            }],
            attributes: ['title', 'description', 'createdAt']

        });
        return rta;
    }

    async findOne(id) {
        const publication = await models.Publication.findByPk(id);
        if(!publication){
            throw boom.notFound('Publicacion no encontrada');
        }
        return publication;
    }
    
    async update(id, changes) {
        const publication = await this.findOne(id);
        const rta = await publication.update(changes);
        return rta;          
    }
  
    async delete(id) {
        const publication = await this.findOne(id);
        await publication.destroy();
        return { id };          
    }
}

module.exports = PublicationsService;