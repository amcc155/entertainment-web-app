import React, { useState } from "react";
import '../styles/search.css'
const SearchBar = ({ data, dataType, onSubmit }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='searchQuery'
                type='text'
                value={value}
                placeholder={`Search for ${dataType}`}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;
