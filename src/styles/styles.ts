import styled from 'styled-components';
import * as url from '../../images/facebook50x50.png';


export const VerticalFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HorizontalFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SpanWithWhiteBackground = styled.span`
  background-color: white;
  border-radius: 3px;
`;

export const DivWithWhiteBackgroundAndBlackBorders = styled.div`
  border: 10px solid;
  border-color: black;
  background-color: white;
`;

export const InstagramLink = styled.a`
  background-image: url(../../images/instagram50x50.png);
  display: block;
  width: 50px;
  height: 50px;
  /* Hide the text. */
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const FacebookLink = styled.a`
  background-image: url(../../images/facebook50x50.png);
  display: block;
  width: 50px;
  height: 50px;
  /* Hide the text. */
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const SpotifyLink = styled.span`
  background-image: url(../../images/spotify50x50.png);
  display: block;
  width: 50px;
  height: 50px;
  /* Hide the text. */
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const AppleMusicLink = styled.span`
  background-image: url(../../images/spotify50x50.png);
  display: block;
  width: 50px;
  height: 50px;
  /* Hide the text. */
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;