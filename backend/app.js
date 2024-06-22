const express = require('express');
const cors = require('cors');
const patch require('patch')
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// rutas de API
app.get('/api', (req, res) => {
  res.send('La API Funciona');
});

// manejar consultas
app.get('/api/consulta', (req, res) => {
  const { query } = req.query;
  res.send(`Respuesta de la consulta: ${query}`);
});

// Errores
app.use((req, res) => {
  res.status(404).send('No encontramos la Página');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
