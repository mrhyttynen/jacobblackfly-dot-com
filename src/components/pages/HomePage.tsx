import { DivWithWhiteBackgroundAndBlackBordersThin, VerticalFlexBox } from "../../styles/styles";
import { SearchingEpImage } from "../Images";
import { SearchingEpLinks } from "../MusicLinks";


export const HomePage: React.FC = () => {
  return (
  <VerticalFlexBox>
    <DivWithWhiteBackgroundAndBlackBordersThin>Listen to my EP "Searching"</DivWithWhiteBackgroundAndBlackBordersThin>
    <SearchingEpImage />
    <SearchingEpLinks />
  </VerticalFlexBox>
  );
};


