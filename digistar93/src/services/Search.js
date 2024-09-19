import { useState, useEffect } from 'react';

export const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length === 0) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/search?query=${query}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return { results, loading };
};
