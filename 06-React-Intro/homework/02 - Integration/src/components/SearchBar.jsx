import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      // Limpiar el campo de búsqueda después de agregar
      setSearchTerm('');
    }
  };

  return (
    <div>
      <input
        type='search'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Buscar...'
      />
      <button onClick={handleAddClick}>Agregar</button>
    </div>
  );
}