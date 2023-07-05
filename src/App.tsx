import React from 'react';
import './App.css';
import SocialMediaLinks from './components/SocialMediaLinks';
import { BodyWithBackgroundImage, VerticalFlexBox } from './styles/styles';

function App() {
  return (
    <div className="App">
      <BodyWithBackgroundImage imageUrl='../images/carrots-combined.png'>
        <VerticalFlexBox>
          <h1 className="main-header">🎵 JACOBBLACKFLY.COM 🎵</h1>
          <SocialMediaLinks />
        </VerticalFlexBox>
      </BodyWithBackgroundImage>
    </div>
  );
}

export default App;
