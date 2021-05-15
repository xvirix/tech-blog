// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// the Comment model extends the sequelize model 
class Comment extends Model {}

// define the table columns and configuration
Comment.init(
    {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        post_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'post',
            key: 'id'
          }
        },
        comment_text: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
        }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    }
  );
  
  module.exports = Comment;