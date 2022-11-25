import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <h1 className="main-header">Welcome to my website :)</h1>
          <div className="logo-grid">
            <div>
              <a id="youtube" className="zoom" href="https://www.youtube.com/channel/UCEu5QOhHaG68EpJvrcsNadg">youtube_link</a>
            </div>
            <div>
              <a id="instagram" className="zoom" href="https://www.instagram.com/jacobblackfly/">instagram_link</a>
            </div>
            <div>
              <a id="facebook" className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</a>
            </div>
            <div id="spotify" className="zoom">spotify_link_coming_soon</div>
            <div className="hide">Coming soon!</div>
          </div>
          <h2 className="sub-header">My channel trailer</h2>
          <iframe className="embedded-vid" width="420" height="315" title="my-video"
            src="https://www.youtube.com/embed/6c5ePXkhQAk">
          </iframe>
        </div>
      </body>
    </div>
  );
}

export default App;
