import React from 'react';
import { HorizontalFlexBox } from '../styles/styles';

const SocialMediaLinks: React.FC = () => {
  return (
    <HorizontalFlexBox>
      <a id="instagram" className="zoom" href="https://www.instagram.com/jacobblackfly/">instagram_link</a>
      <a id="facebook" className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</a>
      <span id="spotify" className="zoom">spotify_link_coming_soon</span>
    </HorizontalFlexBox>
  );
};

export default SocialMediaLinks;
