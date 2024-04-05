import React from 'react';

function BookCard({ book }) {
  if (!book) {
    return null; 
  }

  const { title, first_publish_year, author_name, average_rating, amazon_id } = book;
  const imageUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150x200?text=No+Image';

  const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent('james bond books')}`;

  return (
    <div className="book-card" style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <img src={imageUrl} alt={title} style={{ width: '150px', height: '200px', borderRadius: '4px', marginBottom: '10px' }} />
      <h2>{title}</h2>
      <p>Author: {author_name}</p>
      <p>First Published: {first_publish_year}</p>
      <p>Average Rating: {average_rating}</p>
      {/* Link til å søke amazon */}
      <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
        Search on Amazon
      </a>
    </div>
  );
}

export default BookCard;
