import React, { useState, useEffect } from 'react';

const BookReader = () => {
  const [bookContent, setBookContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace this URL with the link to your book file
  const bookUrl = 'https://readquest.onrender.com/files/sssss.epub';

  useEffect(() => {
    fetch(bookUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        setBookContent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [bookUrl]);

  if (loading) {
    return <div>Loading book...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Book Reader</h1>
      <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
        {bookContent}
      </div>
    </div>
  );
};

export default BookReader;
