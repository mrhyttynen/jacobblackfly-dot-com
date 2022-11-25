import React from 'react';

const LatestVideoEmbedded: React.FC = () => {
  return (
    <div>
      <h2><span>My Latest Video :)</span></h2>
      <iframe className="embedded-vid" width="420" height="315" title="my-video"
        src="https://www.youtube.com/embed/qxeQF1Z_PGQ">
      </iframe>
    </div>
  );
};

export default LatestVideoEmbedded;
