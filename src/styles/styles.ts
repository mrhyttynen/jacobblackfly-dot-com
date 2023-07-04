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

export const DivWithWhiteBackgroundAndBlackBorders = styled.div`
  border: 10px solid;
  border-color: black;
  background-color: white;
`;