'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Listing.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    listingTitle: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    keyword: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zipcode: {
      type: DataTypes.STRING
    },
    gallery: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    description: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    facebook: {
      type: DataTypes.STRING
    },
    twitter: {
      type: DataTypes.STRING
    },
    linkedin: {
      type: DataTypes.STRING
    },
    facilities: {
      type: DataTypes.STRING
    },
    openingTime: {
      type: DataTypes.STRING,
    },
    closingTime: {
      type: DataTypes.STRING,
    },
    pricing: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },

  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};