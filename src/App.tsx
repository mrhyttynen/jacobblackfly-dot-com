import React, { useState } from 'react';
import './App.css';
import SocialMediaLinks from './components/SocialMediaLinks';
import { DivWithWhiteBackgroundAndBlackBordersThin, H1WithWhiteBackgroundAndBlackBorders, VerticalFlexBox } from './styles/styles';
import { SelectedPage, PageMenu, SelectablePage } from './components/PageSelection';

function App() {
  const [selectedPage, setSelectedPage] = useState("HOME");
  return (
    <div className="App">
      <body>
        <VerticalFlexBox>
          <H1WithWhiteBackgroundAndBlackBorders>JACOBBLACKFLY.COM</H1WithWhiteBackgroundAndBlackBorders>
          <PageMenu 
            onShowBio={()=>setSelectedPage("ABOUT")} 
            onShowHome={()=>setSelectedPage("HOME")}
            onShowVideos={()=>setSelectedPage("VIDEOS")}
            selectedPage={selectedPage as SelectablePage}/>
          <SelectedPage selectedPage={selectedPage as SelectablePage} />
          <DivWithWhiteBackgroundAndBlackBordersThin>Follow me</DivWithWhiteBackgroundAndBlackBordersThin>
          <SocialMediaLinks />
          <DivWithWhiteBackgroundAndBlackBordersThin>Thanks for visiting my page and have a great day! :)</DivWithWhiteBackgroundAndBlackBordersThin>
        </VerticalFlexBox>
      </body>
    </div>
  );
}

export default App;
