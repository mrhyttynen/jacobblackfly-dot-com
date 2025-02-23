import { HorizontalFlexBox } from "../styles/styles";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";

interface ToggleProps {
  onReadBio: () => void;
  onGoHome: () => void;
  showBio: boolean;
}

interface HomeOrAboutPageProps {
  showBio: boolean;
}

export const HomeOrAboutToggle: React.FC<ToggleProps> = ({ onReadBio, onGoHome, showBio }) => {
  return (
    <HorizontalFlexBox>
      <button
        onClick={onGoHome}
        className={`px-4 py-2 rounded-lg transition-all duration-300 text-white ${
          !showBio ? "bg-blue-600 hover:bg-blue-600" : "bg-slate-500 hover:bg-gray-600"
        }`}
      >
        Home
      </button>
      <button
        onClick={onReadBio}
        className={`px-4 py-2 rounded-lg transition-all duration-300 text-white ${
          showBio ? "bg-blue-600 hover:bg-blue-600" : "bg-slate-500 hover:bg-gray-600"
        }`}
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