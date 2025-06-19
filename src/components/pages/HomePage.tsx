import { DivWithWhiteBackgroundAndBlackBordersThin, VerticalFlexBox } from "../../styles/styles";
import { SearchingImage, CarrotCakeImage, AvoidantImage } from "../Images";
import { SearchingLinks, CarrotCakeLinks, AvoidantLinks } from "../MusicLinks";


export const HomePage: React.FC = () => {
  return (
  <VerticalFlexBox>
    <DivWithWhiteBackgroundAndBlackBordersThin>Listen to "Avoidant"</DivWithWhiteBackgroundAndBlackBordersThin>
    <AvoidantImage />
    <AvoidantLinks />
    <DivWithWhiteBackgroundAndBlackBordersThin>Listen to "Searching"</DivWithWhiteBackgroundAndBlackBordersThin>
    <SearchingImage />
    <SearchingLinks />
    <DivWithWhiteBackgroundAndBlackBordersThin>Listen to "180 Degrees (Carrot Cake Song)"</DivWithWhiteBackgroundAndBlackBordersThin>
    <CarrotCakeImage />
    <CarrotCakeLinks />
  </VerticalFlexBox>
  );
};


