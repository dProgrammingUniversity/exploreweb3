'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      defaultValue: 'user',
    },
    avatar: {
      type: DataTypes.STRING,
    },

    phoneNumber: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING,
    },

    website: {
      type: DataTypes.STRING,
    },

    bio: {
      type: DataTypes.TEXT,
    },

    fbUrl: {
      type: DataTypes.STRING,
    },
    twtUrl: {
      type: DataTypes.STRING,
    },
    linkUrl: {
      type: DataTypes.STRING,
    },
    insUrl: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};