import React from 'react';

const ChannelTrailerEmbedded: React.FC = () => {
  return (
    <div>
      <h2><span>My Channel Trailer :)</span></h2>
      <iframe className="embedded-vid" width="420" height="315" title="my-video"
        src="https://www.youtube.com/embed/6c5ePXkhQAk">
      </iframe>
    </div>
  );
};

export default ChannelTrailerEmbedded;
