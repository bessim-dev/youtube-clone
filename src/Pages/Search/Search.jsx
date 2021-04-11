import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../../Components/videoCard/videoCard";

const API_KEY = "AIzaSyAmUsE9HYKwh5dpqTo3xkjJ3yKPC0qFFiU"


export const Search = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = location.state
  const qsearchTerm = (searchTerm) => {
    try {
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&key=${API_KEY}`
      ).then((data) => setSearchResults(data.data.items))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    qsearchTerm(searchTerm);
  }, [searchTerm])
  return (
    <div style={{ marginLeft: "20px" }}>
      {
        searchResults && searchResults.map(item => (
          < VideoCard
            key={item.id.videoId}
            data={item}
            hor
          />
        ))

      }
    </div>
  )


};

