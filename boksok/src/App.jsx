import React, { useState } from 'react';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchResults) => {
    setSearchResults(searchResults);
  };

  return (
    <Layout>
      <div>
        <SearchBar onSearch={handleSearch} />
        {searchResults.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
