import React from 'react';
import { DivWithWhiteBackgroundAndBlackBordersThick, VerticalFlexBox } from '../styles/styles';

const SocialMediaLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBordersThick>
      <VerticalFlexBox>
        <a id="youtube" className="zoom" href="https://www.youtube.com/watch?v=triJ-gSDO38">carrotcake_youtube</a>
        <a id="spotify" className="zoom" href="https://open.spotify.com/track/0zbRd7eFUagrxQfX0BSN5p?si=VJw55mIESuCkVnjaNztklA">carrotcake_spotify</a>
        <a id="apple_music" className="zoom" href="https://music.apple.com/gb/album/180-degrees-carrot-cake-song/1695665758?i=1695665759">carrotcake_apple</a>
        <a id="amazon_music" className="zoom" href="https://music.amazon.co.uk/albums/B0CB2JNF88?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_2RkvvEIzWAsR5dySabqS0yCFd&trackAsin=B0CB2SF4C2">carrotcake_amazon</a>
      </VerticalFlexBox>
    </DivWithWhiteBackgroundAndBlackBordersThick>
  );
};

export default SocialMediaLinks;
