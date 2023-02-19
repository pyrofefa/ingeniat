
const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model')
const PUBLICATION_TABLE = 'publications';

const PublicationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    field: 'user_id',
    type: DataTypes.INTEGER,
    references:{
      model : USER_TABLE,
      key : 'id'
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Publication extends Model {
   static associate(models){
     this.belongsTo(models.User, { as: 'user' });
   }
   static config(sequelize) {
    return {
      sequelize,
      tableName: PUBLICATION_TABLE,
      modelName: 'Publication',
      timestamps: false
    }
  }
}


module.exports = { PUBLICATION_TABLE, PublicationSchema, Publication }