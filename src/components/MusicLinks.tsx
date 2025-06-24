import React from 'react';
import { DivWithWhiteBackgroundAndBlackBordersThick, HorizontalFlexBox } from '../styles/styles';

export const SearchingEpLinks: React.FC = () => {
  return (
    <DivWithWhiteBackgroundAndBlackBordersThick>
      <HorizontalFlexBox>
        <a id="spotify" className="zoom" href="https://open.spotify.com/album/54cMaJgpXMyU6zY72I9PYP">ep_spotify</a>
        <a id="youtube" className="zoom" href="https://youtube.com/playlist?list=OLAK5uy_mM89XmzCk4Wh1qW5YGY4-fC_NoBoq0q3M">ep_youtube</a>
        <a id="apple_music" className="zoom" href="https://music.apple.com/us/album/searching-ep/1822209020">ep_apple</a>
        <a id="amazon_music" className="zoom" href="https://amazon.co.uk/music/player/albums/B0FF56SNZ6">ep_amazon</a>
      </HorizontalFlexBox>
    </DivWithWhiteBackgroundAndBlackBordersThick>
  );
};
