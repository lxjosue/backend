const consultarAPI = async (req, res) => {
    try {
      const { query } = req.query;
      const response = await fetch(`URL_DE_LA_API_EXTERNA?q=${query}`);
      const data = await response.json();
      res.send(data); // Envía la respuesta
    } catch (error) {
      console.error('Error al consultar la API:', error);
      res.status(500).send('Error del servidor');
    }
  };
  
  module.exports = {
    consultarAPI,
  };
  