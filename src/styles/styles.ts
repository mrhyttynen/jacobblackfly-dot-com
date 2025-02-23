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
  padding: 2px;
`;

export const DivWithWhiteBackgroundAndBlackBordersThin = styled.div`
  max-width: 750px; 
  border: 2px solid;
  border-color: black;
  background-color: white;
  margin: 20px;
  padding: 4px;
`;

// responsive fontsize (vw = viewport width) on mobile devices only
export const H1WithWhiteBackgroundAndBlackBordrers = styled.h1`
  border: 6px solid;
  border-color: black;
  background-color: white;

  @media only screen and (max-width: 700px) {
    {
      font-size: 6vw;
    }
  }
`