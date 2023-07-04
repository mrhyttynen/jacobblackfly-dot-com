import React from 'react';
import {
  DivWithWhiteBackgroundAndBlackBorders,
  FacebookLink,
  InstagramLink,
  SpanWithWhiteBackground,
  SpotifyLink,
  AppleMusicLink,
  VerticalFlexBox
} from '../styles/styles';

const SocialMediaLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBorders>
      <VerticalFlexBox>
        
        <InstagramLink className="zoom" href="https://www.instagram.com/jacobblackfly/">instagram_link</InstagramLink>
        
        <FacebookLink className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</FacebookLink>
        
        <SpotifyLink className="zoom">spotify_link_coming_soon</SpotifyLink>
        <SpanWithWhiteBackground>Spotify Coming Soon!</SpanWithWhiteBackground>
        
        <AppleMusicLink className="zoom">apple_music_link_coming_soon</AppleMusicLink>
        <SpanWithWhiteBackground>Apple Music Coming Soon!</SpanWithWhiteBackground>
      
      </VerticalFlexBox>
    </DivWithWhiteBackgroundAndBlackBorders>
  );
};

export default SocialMediaLinks;

// <a id="facebook" className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</a>