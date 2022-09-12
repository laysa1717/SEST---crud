'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define('Videos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING
      },
      link: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
  }, {
    createdAt:false,
    updatedAt:false
  });
  return Videos;
};