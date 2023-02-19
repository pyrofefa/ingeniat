const { User, UserSchema } =  require('./user.model');
const { Publication, PublicationSchema } = require('./publication.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Publication.init(PublicationSchema, Publication.config(sequelize));

  Publication.associate(sequelize.models);
}

module.exports = setupModels;