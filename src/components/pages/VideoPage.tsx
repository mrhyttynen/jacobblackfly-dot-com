import { VerticalFlexBox } from "../../styles/styles";

export const VideoPage: React.FC = () => {
  return (
    <VerticalFlexBox>
      <iframe 
        className="w-[90vw] max-w-[1000px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        src="https://www.youtube.com/embed/drN7_hmVLh4?si=T66AoBorZzRFHMCS" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      >
      </iframe>
      <iframe 
        className="w-[90vw] max-w-[1000px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        src="https://www.youtube.com/embed/BMzRTILK1Aw?si=26gjodRhqgoIoy_u" 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      >
      </iframe>
    </VerticalFlexBox>
  );
};


