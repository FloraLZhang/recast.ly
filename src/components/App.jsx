import Search from "./Search.js";
import searchYouTube from "../lib/searchYouTube.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoList from "./VideoList.js";

const { useState, useEffect } = React;

var App = (props) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const getSearchVideos = (input) => {
    searchYouTube(input, (videos) => {
      setCurrentVideo(videos[0]);
      setVideos(videos);
    });
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video)
  };

  useEffect(() => {
    getSearchVideos("");
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h5><em>Search</em>
            <Search handleSearch={getSearchVideos} /></h5>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <h5><em>VideoPlayer</em>
          <VideoPlayer video={currentVideo} /></h5>
        </div>
        <div className="col-md-5">
        <h5><em>VideoList</em>
          <VideoList
            videos={videos} onVideoClick={handleVideoClick}
          /></h5>
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;