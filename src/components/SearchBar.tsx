import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../assets/styles/SearchBar.css'; // Add your custom styling if needed

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value); // Trigger search on each change
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={() => onSearch(query)} className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
