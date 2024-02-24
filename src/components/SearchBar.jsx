import React, { useState } from "react";
import '../styles/search.css'
const SearchBar = ({ data, dataType, onSubmit, setSearchTerm, searchTerm }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                name='searchQuery'
                type='text'
                value={value}
                placeholder={`Search for ${dataType}`}
                onChange= {handleChange}
            />
        </form>
    );
};

export default SearchBar;
