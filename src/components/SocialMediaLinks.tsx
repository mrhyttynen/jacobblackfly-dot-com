import React from 'react';
import { DivWithWhiteBackgroundAndBlackBordersThick, VerticalFlexBox } from '../styles/styles';

const SocialMediaLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBordersThick>
      <VerticalFlexBox>
        <a id="instagram" className="zoom" href="https://www.instagram.com/jacobblackfly/">instagram_link</a>
        <a id="facebook" className="zoom" href="https://www.facebook.com/jacobbblackfly/">facebook_link</a>
      </VerticalFlexBox>
    </DivWithWhiteBackgroundAndBlackBordersThick>
  );
};

export default SocialMediaLinks;
