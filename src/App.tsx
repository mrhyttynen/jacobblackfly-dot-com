import React from 'react';
import './App.css';
import SocialMediaLinks from './components/SocialMediaLinks';
import { DivWithWhiteBackgroundAndBlackBordersThin, H1WithWhiteBackgroundAndBlackBordrers, VerticalFlexBox } from './styles/styles';
import { SearchingLinks, CarrotCakeLinks } from './components/MusicLinks';
import { CarrotCakeImage, SearchingImage } from './components/Images';

function App() {
  return (
    <div className="App">
      <body>
        <VerticalFlexBox>
          <H1WithWhiteBackgroundAndBlackBordrers>🎵 JACOBBLACKFLY.COM 🎵</H1WithWhiteBackgroundAndBlackBordrers>
          <DivWithWhiteBackgroundAndBlackBordersThin>Listen to my new song "Searching":</DivWithWhiteBackgroundAndBlackBordersThin>
          <SearchingImage />
          <SearchingLinks />
          <DivWithWhiteBackgroundAndBlackBordersThin>Listen to 180 Degrees (Carrot Cake Song) below:</DivWithWhiteBackgroundAndBlackBordersThin>
          <CarrotCakeImage />
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
