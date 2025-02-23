import React from 'react';
import { DivWithWhiteBackgroundAndBlackBordersThick, HorizontalFlexBox } from '../styles/styles';

export const CarrotCakeLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBordersThick>
      <HorizontalFlexBox>
        <a id="spotify" className="zoom" href="https://open.spotify.com/track/0zbRd7eFUagrxQfX0BSN5p?si=VJw55mIESuCkVnjaNztklA">carrotcake_spotify</a>
        <a id="youtube" className="zoom" href="https://youtu.be/BMzRTILK1Aw">carrotcake_youtube</a>
        <a id="apple_music" className="zoom" href="https://music.apple.com/gb/album/180-degrees-carrot-cake-song/1695665758?i=1695665759">carrotcake_apple</a>
        <a id="amazon_music" className="zoom" href="https://music.amazon.co.uk/albums/B0CB2JNF88?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_2RkvvEIzWAsR5dySabqS0yCFd&trackAsin=B0CB2SF4C2">carrotcake_amazon</a>
      </HorizontalFlexBox>
    </DivWithWhiteBackgroundAndBlackBordersThick>
  );
};

export const SearchingLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBordersThick>
      <HorizontalFlexBox>
        <a id="spotify" className="zoom" href="https://open.spotify.com/album/2hqZceh2GVkHgqy5mt2Rbg">searching_spotify</a>
        <a id="youtube" className="zoom" href="https://youtu.be/drN7_hmVLh4">searching_youtube</a>
        <a id="apple_music" className="zoom" href="https://music.apple.com/us/album/searching/1794303799">searching_apple</a>
        <a id="amazon_music" className="zoom" href="https://www.amazon.com/music/player/tracks/B0DVQ54M2L">searching_amazon</a>
      </HorizontalFlexBox>
    </DivWithWhiteBackgroundAndBlackBordersThick>
  );
};
