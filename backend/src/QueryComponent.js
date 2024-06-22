import React, { useState } from 'react';
import InputForm from './InputForm';

const QueryComponent = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`URL de la API?q=${query}`);
      const data = await response.json();
      setResults(data);
      setLoading(false);
    } catch (error) {
      console.error('Error al buscar:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <InputForm handleSearch={handleSearch} />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryComponent;
