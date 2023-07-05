import styled from 'styled-components';

export const BodyWithBackgroundImage = styled.body<{ imageUrl: string; }>`
  background-image: url(${props => props.imageUrl});
  background-attachment: fixed;
`;

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
  border: 3px solid;
  background-color: white;
  border-radius: 3px;
`;

export const DivWithWhiteBackgroundAndBlackBorders = styled.div`
  border: 10px solid;
  border-color: black;
  background-color: white;
`;

export const LinkWithLogo = styled.a<{ logoUrl: string; }>`
  background-image: url(${props => props.logoUrl});
  display: block;
  width: 50px;
  height: 50px;
  /* Hide the text. */
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const SpanWithLogo = styled.span<{ logoUrl: string; }>`
  background-image: url(${props => props.logoUrl});
  display: block;
  width: 50px;
  height: 50px;
  /* Hide the text. */
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;
