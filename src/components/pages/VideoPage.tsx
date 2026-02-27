import { useEffect, useState } from "react";
import { VerticalFlexBox } from "../../styles/styles";

export const VideoPage: React.FC = () => {
  // get data from Youtube API
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [viewCount, setViewCount] = useState(null);
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        // youtube API key (prd) has been configured on GCP to only accept requests from the website
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setSubscriberCount(data.items[0].statistics.subscriberCount);
          setViewCount(data.items[0].statistics.viewCount);
        } else {
          console.warn("API returned no data for some reason");
        }
      } catch (error) {
        console.error(`Youtube API request failed! : ${error}`);
      }
    };

    fetchSubscribers();
  }, []);

  // return component
  return (
    <VerticalFlexBox>
      <h1>
        Subscribers:{" "}
        <b
          style={{
            textDecoration: "underline",
            textDecorationThickness: "2px",
          }}
        >
          {subscriberCount}
        </b>{" "}
        - can we get to 100?
      </h1>
      <h1>
        Total views:{" "}
        <b
          style={{
            textDecoration: "underline",
            textDecorationThickness: "2px",
          }}
        >
          {viewCount}
        </b>
      </h1>
      <p>Refresh page to update</p>
      <iframe
        className="w-[45vw] max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
        src="https://www.youtube.com/embed/QY98wFTH0kI?si=QJzs6d4u-kr3Wj60"
        title="YouTube video player for Holiday Feels"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <iframe
        className="w-[45vw] max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
        src="https://www.youtube.com/embed/drN7_hmVLh4?si=T66AoBorZzRFHMCS"
        title="YouTube video player for Searching"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <iframe
        className="w-[45vw] max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
        src="https://www.youtube.com/embed/BMzRTILK1Aw?si=26gjodRhqgoIoy_u"
        title="YouTube video player for Carrot Cake"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </VerticalFlexBox>
  );
};
