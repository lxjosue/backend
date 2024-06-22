import React, { useState } from 'react';

const InputForm = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Ingresar problema"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default InputForm;
