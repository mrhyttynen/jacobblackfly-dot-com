import styled from 'styled-components'

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

export const DivWithWhiteBackgroundAndBlackBordersThick = styled.div`
  border: 10px solid;
  border-color: black;
  background-color: white;
`;

export const DivWithWhiteBackgroundAndBlackBordersThin = styled.div`
  border: 2px solid;
  border-color: black;
  background-color: white;
  margin: 20px
`;

// responsive fontsize (vw = viewport width)
export const H1WithWhiteBackgroundAndBlackBordrers = styled.h1`
  font-size: 6vw;
  border: 6px solid;
  border-color: black;
  background-color: white;
`