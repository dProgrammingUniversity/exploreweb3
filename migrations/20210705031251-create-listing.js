'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Listings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },

      listingTitle: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      keyword: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      zipcode: {
        type: Sequelize.STRING,
      },
      gallery: {
        type: Sequelize.ARRAY(Sequelize.TEXT) ,
      },
      description: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      facebook: {
        type: Sequelize.STRING,
      },
      twitter: {
        type: Sequelize.STRING,
      },
      linkedin: {
        type: Sequelize.STRING,
      },
      facilities: {
        type: Sequelize.STRING,
      },
      openingTime: {
        type: Sequelize.STRING,
      },
      closingTime: {
        type: Sequelize.STRING,
      },
      pricing: {
        type: Sequelize.STRING,
      },
      status: {
        type:Sequelize.STRING,
        defaultValue: 'pending',
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Listings');
  }
};