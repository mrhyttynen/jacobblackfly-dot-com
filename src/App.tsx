import React from 'react';
import './App.css';
import SocialMediaLinks from './components/SocialMediaLinks';
import { DivWithWhiteBackgroundAndBlackBordersThin, H1WithWhiteBackgroundAndBlackBordrers, VerticalFlexBox } from './styles/styles';
import { SearchingLinks, CarrotCakeLinks } from './components/MusicLinks';

function App() {
  return (
    <div className="App">
      <body>
        <VerticalFlexBox>
          <H1WithWhiteBackgroundAndBlackBordrers>🎵 JACOBBLACKFLY.COM 🎵</H1WithWhiteBackgroundAndBlackBordrers>
          <DivWithWhiteBackgroundAndBlackBordersThin>Listen to my new song "Searching":</DivWithWhiteBackgroundAndBlackBordersThin>
          {/* add pic */}
          <SearchingLinks />
          <DivWithWhiteBackgroundAndBlackBordersThin>Listen to my rap about carrot cake below:</DivWithWhiteBackgroundAndBlackBordersThin>
          {/* add pic */}
          <CarrotCakeLinks />
          <DivWithWhiteBackgroundAndBlackBordersThin>Social media thingies</DivWithWhiteBackgroundAndBlackBordersThin>
          <SocialMediaLinks />
          <DivWithWhiteBackgroundAndBlackBordersThin>Thanks for visiting my page and have a great day! :)</DivWithWhiteBackgroundAndBlackBordersThin>
        </VerticalFlexBox>
      </body>
    </div>
  );
}

export default App;
