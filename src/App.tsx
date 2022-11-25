import React from 'react';
import './App.css';
import ChannelTrailerEmbedded from './components/ChannelTrailerEmbedded';
import LatestVideoEmbedded from './components/LatestVideoEmbedded';

function App() {
  return (
    <div className="App">
      <body>
        <div className="flexbox-container">
          <h1 className="main-header">Welcome to my website :)</h1>
          <LatestVideoEmbedded/>
          <ChannelTrailerEmbedded/>
        </div>
      </body>
    </div>
  );
}

export default App;
