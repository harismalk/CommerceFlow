const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Product = require('./Product');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending',
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Associate Order with User and Product
Order.belongsTo(User);
Order.belongsToMany(Product, { through: 'OrderProducts' });

module.exports = Order;
