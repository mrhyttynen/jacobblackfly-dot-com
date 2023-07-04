import React from 'react';
import { DivWithWhiteBackgroundAndBlackBorders, SpanWithWhiteBackground, VerticalFlexBox } from '../styles/styles';

const SocialMediaLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBorders>
      <VerticalFlexBox>
        <a id="instagram" className="zoom" href="https://www.instagram.com/jacobblackfly/">instagram_link</a>
        <a id="facebook" className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</a>
        <span id="spotify" className="zoom">spotify_link_coming_soon</span>
        <SpanWithWhiteBackground>Spotify Coming Soon!</SpanWithWhiteBackground>
        <span id="apple_music" className='zoom'>apple_music_link_coming_soon</span>
        <SpanWithWhiteBackground>Apple Music Coming Soon!</SpanWithWhiteBackground>
      </VerticalFlexBox>
    </DivWithWhiteBackgroundAndBlackBorders>
  );
};

export default SocialMediaLinks;
