import React from 'react';
import {
  DivWithWhiteBackgroundAndBlackBorders,
  SpanWithWhiteBackground,
  VerticalFlexBox,
  LinkWithLogo,
  SpanWithLogo
} from '../styles/styles';
import * as instagramLogo from "../images/instagram50x50.png";

const SocialMediaLinks: React.FC = () => {
  return (
    <img src={instagramLogo as string} alt="" />
    // <DivWithWhiteBackgroundAndBlackBorders>
    //   <VerticalFlexBox>
        
    //     <LinkWithLogo logoUrl={instagramLogo} className="zoom" href="https://www.instagram.com/jacobblackfly/">instagram_link</LinkWithLogo>
        
    //     <LinkWithLogo logoUrl="../../images/facebook50x50.png" className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</LinkWithLogo>
        
    //     <SpanWithLogo logoUrl="../../spotify50x50.png" className="zoom">spotify_link_coming_soon</SpanWithLogo>
    //     <SpanWithWhiteBackground>Spotify Coming Soon!</SpanWithWhiteBackground>
        
    //     <SpanWithLogo logoUrl="../../spotify50x50.png" className="zoom">apple_music_link_coming_soon</SpanWithLogo>
    //     <SpanWithWhiteBackground>Apple Music Coming Soon!</SpanWithWhiteBackground>
      
    //   </VerticalFlexBox>
    // </DivWithWhiteBackgroundAndBlackBorders>
  );
};

export default SocialMediaLinks;

// <a id="facebook" className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</a>