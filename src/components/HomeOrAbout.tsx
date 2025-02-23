import { HorizontalFlexBox } from "../styles/styles";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";

interface ToggleProps {
  onReadBio: () => void;
  onGoHome: () => void;
}

interface HomeOrAboutPageProps {
  showBio: boolean;
}

export const HomeOrAboutToggle: React.FC<ToggleProps> = ({ onReadBio, onGoHome }) => {
  return (
    <HorizontalFlexBox>
      <button
        onClick={onGoHome}
      >
        Home
      </button>
      <button
        onClick={onReadBio}
      >
        About
      </button>
    </HorizontalFlexBox>
  );
};

export const HomeOrAboutPage: React.FC<HomeOrAboutPageProps> = ({ showBio }) => {
  return showBio ? (
    <AboutPage />
  ) : (
    <HomePage />
  );
};