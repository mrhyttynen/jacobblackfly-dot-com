import React from 'react';
import './App.css';
import ChannelTrailerEmbedded from './components/ChannelTrailerEmbedded';
import LatestVideoEmbedded from './components/LatestVideoEmbedded';
import SocialMediaLinks from './components/SocialMediaLinks';
import { VerticalFlexBox } from './styles/styles';

function App() {
  return (
    <div className="App">
      <body>
        <VerticalFlexBox>
          <h1 className="main-header">🎵 JACOBBLACKFLY.COM 🎵</h1>
          <LatestVideoEmbedded/>
          <ChannelTrailerEmbedded/>
          <SocialMediaLinks/>
        </VerticalFlexBox>
      </body>
    </div>
  );
}

export default App;
