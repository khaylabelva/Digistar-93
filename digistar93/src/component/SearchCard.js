import React from 'react';
import '../App.css';

const SearchCard = ({ result, onLoadMore }) => {
  return (
    <div className="search-card">
      <h3>{result.title}</h3>
      <p>{result.description}</p>
      <p>{result.previewText}</p>
      <button className="btn-view-more">Selengkapnya</button>
    </div>
  );
};

export default SearchCard;
