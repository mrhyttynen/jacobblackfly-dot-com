import { DivWithWhiteBackgroundAndBlackBordersThin, VerticalFlexBox } from "../../styles/styles";
import { SearchingImage, CarrotCakeImage } from "../Images";
import { SearchingLinks, CarrotCakeLinks } from "../MusicLinks";


export const HomePage: React.FC = () => {
  return (
  <VerticalFlexBox>
    <DivWithWhiteBackgroundAndBlackBordersThin>Listen to my new song "Searching"</DivWithWhiteBackgroundAndBlackBordersThin>
    <SearchingImage />
    <SearchingLinks />
    <DivWithWhiteBackgroundAndBlackBordersThin>Listen to "180 Degrees (Carrot Cake Song)"</DivWithWhiteBackgroundAndBlackBordersThin>
    <CarrotCakeImage />
    <CarrotCakeLinks />
  </VerticalFlexBox>
  );
};


