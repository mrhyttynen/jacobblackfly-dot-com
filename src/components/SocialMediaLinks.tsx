import React from "react";
import {
  DivWithWhiteBackgroundAndBlackBordersThick,
  HorizontalFlexBox,
} from "../styles/styles";

const SocialMediaLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBordersThick>
      <HorizontalFlexBox>
        <a
          id="instagram"
          className="zoom"
          href="https://www.instagram.com/jacobblackfly/"
        >
          instagram_link
        </a>
        <a
          id="facebook"
          className="zoom"
          href="https://www.facebook.com/jacobbblackfly/"
        >
          facebook_link
        </a>
      </HorizontalFlexBox>
    </DivWithWhiteBackgroundAndBlackBordersThick>
  );
};

export default SocialMediaLinks;
