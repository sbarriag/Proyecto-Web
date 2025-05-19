const { sequelize, testConnection } = require('../config/db.config');
const User = require('./user.model');
// const Stats = require('./stats.model');


const syncModels = async () => {
  try {
    
    await testConnection();
    
    
    // Cuidado con Force
    await sequelize.sync({ force: false });
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  }
};

module.exports = {
  User,
  // Stats,
  syncModels
};