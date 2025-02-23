import React, { useState } from 'react';
import './App.css';
import SocialMediaLinks from './components/SocialMediaLinks';
import { DivWithWhiteBackgroundAndBlackBordersThin, H1WithWhiteBackgroundAndBlackBordrers, VerticalFlexBox } from './styles/styles';
import { HomeOrAboutPage, HomeOrAboutToggle } from './components/HomeOrAbout';

function App() {
  const [showBio, setShowBio] = useState(false);
  return (
    <div className="App">
      <body>
        <VerticalFlexBox>
          <H1WithWhiteBackgroundAndBlackBordrers>🎵 JACOBBLACKFLY.COM 🎵</H1WithWhiteBackgroundAndBlackBordrers>
          <HomeOrAboutToggle onReadBio={()=>setShowBio(true)} onGoHome={()=>setShowBio(false)}/>
          <HomeOrAboutPage showBio={showBio} />
          <DivWithWhiteBackgroundAndBlackBordersThin>Follow me:</DivWithWhiteBackgroundAndBlackBordersThin>
          <SocialMediaLinks />
          <DivWithWhiteBackgroundAndBlackBordersThin>Thanks for visiting my page and have a great day! :)</DivWithWhiteBackgroundAndBlackBordersThin>
        </VerticalFlexBox>
      </body>
    </div>
  );
}

export default App;
