'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM,
        values: ['user', 'admin'],
        defaultValue: 'user',
      },

      avatar: {
        type: Sequelize.STRING,
      },

      phoneNumber: {
        type: Sequelize.STRING,
      },

      address: {
        type: Sequelize.STRING,
      },

      website: {
        type: Sequelize.STRING,
      },
      
      bio: {
        type: Sequelize.TEXT,
      },

      fbUrl: {
        type: Sequelize.STRING,
      },
      twtUrl: {
        type: Sequelize.STRING,
      },
      linkUrl: {
        type: Sequelize.STRING,
      },
      insUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
