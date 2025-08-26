import styled from "styled-components";

export const VerticalFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 7px;
`;

export const HorizontalFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
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
  border: 3px solid;
  border-color: black;
  background-color: white;
  margin-top: 25px;
  margin-bottom: 3px;
  margin-left: 12px;
  margin-right: 12px;
  padding: 4px;
`;

// responsive fontsize (vw = viewport width) on mobile devices only
export const H1Responsive = styled.h1`
font-size: 2rem;  

@media only screen and (max-width: 600px) {
  {
    font-size: 6vw;
  }
}
`;
