import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="searchDiv"><input type='search' className='search' placeholder={placeholder} onChange={handleChange} /></div>
);