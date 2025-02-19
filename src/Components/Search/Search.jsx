import "./Search.css";
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Pesquise ..."
                className="search-input"
            />
            <button type="submit" className="search-button">
                <i className="bx bx-search">🔍</i>
            </button>
        </form>
    );
};

export default Search;