import React from 'react';
// import BookReader from './BookReader';
import EpubReader from './EpubReader';

function App() {
  // Replace this URL with the path to your ePub file
  const epubUrl = 'https://readquest.onrender.com/files/sssss.epub';

  return (
    <div className="App">
      <EpubReader epubUrl={epubUrl} />
    </div>
  );
}

export default App;
