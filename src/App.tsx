import React, { useState } from 'react';
import './App.css';
import SocialMediaLinks from './components/SocialMediaLinks';
import { DivWithWhiteBackgroundAndBlackBordersThin, VerticalFlexBox } from './styles/styles';
import { SelectedPage, PageMenu, SelectablePage } from './components/PageSelection';
//  nothingsdfsdf
function App() {
  const [selectedPage, setSelectedPage] = useState("HOMdsfsE");
  return (
    <div className="App">
      <body>
        <VerticalFlexBox>
          <a id="jacobblackfly" href="https://www.jacobblackfly.com">jacob blackfly</a>
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
