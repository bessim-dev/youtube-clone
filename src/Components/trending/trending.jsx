import React from "react";
import VideoCard from "../videosSection/videoCard";
import axios from "axios";
import "./trending.css";
import prettyMilliseconds from 'pretty-ms'
const API_KEY = "AIzaSyBe1VQSCIy9ABdy1jOI_fGAQ5N7SuwzeiU";
const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};
const since = (date) => {
  const one_sec = 1000;
  const one_min = one_sec * 60;
  const one_hour = one_min * 60;
  const one_day = one_hour * 24;
  const one_year = one_day * 365;
  // Calculate the difference in milliseconds
  const difference_ms = Date.now() - new Date(date);
  console.log(prettyMilliseconds(difference_ms,{compact: true}))
  switch (true) {
    case difference_ms < one_min:
      return (Math.round(difference_ms / one_sec))
      break;
    case (one_min < difference_ms < one_hour):
      return prettyMilliseconds(difference_ms,{compact: true})
      break;
    case one_hour < difference_ms < one_day:
      return (Math.round(difference_ms / one_hour))
      break;
    case one_day < difference_ms < one_year:
      return (Math.round(difference_ms / one_day))
      break;
    case difference_ms > one_year:
      return (Math.round(difference_ms / one_year))
      break;
    default:
      break;
  }
  // Convert back to days and return
  return Math.round(difference_ms / one_day);
};
class Trending extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`
      )
      .then((res) => this.setState({ data: res.data.items }));
  }

  render() {
    const { data } = this.state;
    if (!data) return <div>Loading ....</div>;
    console.log(data);
    return (
      <div className="trending">
        {data.map((item) => (
          <VideoCard
            key={item.id}
            title={item.snippet.title}
            views={numFormatter(item.statistics.viewCount)}
            channel={item.snippet.channelTitle}
            image={item.snippet.thumbnails.standard.url}
            description={item.snippet.description}
            timeStamp={since(item.snippet.publishedAt)}
          />
        ))}
      </div>
    );
  }
}
export default Trending;
