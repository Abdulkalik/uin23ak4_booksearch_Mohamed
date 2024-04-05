import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    setError(null);

    fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then(data => {
        console.log('Search results:', data);
        onSearch(data.docs || []); // passere en tom array ([]) hvis data.docs er udefinert
        setLoading(false);
      })
      .catch(error => {
        setError('Error. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Søk etter bøker..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Søk'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchBar;
