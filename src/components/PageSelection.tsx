import { HorizontalFlexBox } from "../styles/styles";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { VideoPage } from "./pages/VideoPage";

export type SelectablePage = "HOME" | "VIDEOS" | "ABOUT";

interface ToggleProps {
  onShowBio: () => void;
  onShowHome: () => void;
  onShowVideos: () => void;
  selectedPage: SelectablePage;
}

interface SelectedPageProps {
  selectedPage: SelectablePage;
}

export const PageMenu: React.FC<ToggleProps> = ({ 
  onShowBio: onShowBio, 
  onShowHome: onShowHome, 
  onShowVideos: onShowVideos, 
  selectedPage: selectedPage 
}) => {
  return (
    <HorizontalFlexBox>
      <button
        onClick={onShowHome}
        className={`px-4 py-2 rounded-lg transition-all duration-300 text-white ${
          selectedPage === "HOME" ? "bg-blue-600 hover:bg-blue-600" : "bg-slate-500 hover:bg-blue-700"
        }`}
      >
        Home
      </button>
      <button
        onClick={onShowVideos}
        className={`px-4 py-2 rounded-lg transition-all duration-300 text-white ${
          selectedPage === "VIDEOS" ? "bg-blue-600 hover:bg-blue-600" : "bg-slate-500 hover:bg-blue-700"
        }`}
      >
        Videos
      </button>
      <button
        onClick={onShowBio}
        className={`px-4 py-2 rounded-lg transition-all duration-300 text-white ${
          selectedPage === "ABOUT" ? "bg-blue-600 hover:bg-blue-600" : "bg-slate-500 hover:bg-blue-700"
        }`}
      >
        About
      </button>
    </HorizontalFlexBox>
  );
};

export const SelectedPage: React.FC<SelectedPageProps> = ({ selectedPage }) => {
  if (selectedPage === "ABOUT") {
    return <AboutPage />
  } else if (selectedPage === "HOME") {
    return <HomePage />
  } else {
    return <VideoPage />
  }
};