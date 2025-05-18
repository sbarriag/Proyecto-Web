const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const { syncModels } = require('./models');

// Importamos las rutas
const userRoutes = require('./routes/user.routes');
// const statsRoutes = require('./routes/stats.routes');

// Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('../client'));

// Rutas
app.use('/api/users', userRoutes);
// app.use('/api/stats', statsRoutes);

// Para probar
app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Mi Juego' });
});

// Sincronizar
syncModels().then(() => {
  // Iniciamos el servidor
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});