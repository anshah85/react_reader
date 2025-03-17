// EpubReader.js
import React, { useEffect } from 'react';
import ePub from 'epubjs';

const EpubReader = ({ epubUrl }) => {
  useEffect(() => {
    // Create the book instance
    const book = ePub(epubUrl);

    // Render the book into the div with id 'viewer'
    const rendition = book.renderTo('viewer', {
      width: '100%',
      height: '600px'
    });

    // Display the first page or chapter
    rendition.display();

    // Cleanup when the component unmounts
    return () => {
      rendition.destroy();
      book.destroy();
    };
  }, [epubUrl]);

  return (
    <div>
      <h1>ePub Reader</h1>
      <div id="viewer" style={{ border: '1px solid #ccc' }} />
    </div>
  );
};

export default EpubReader;
