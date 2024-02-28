import React from "react"
import video from "../data/video.js";
import Frame from "./Frame.js";
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Frame 
      onVideo={video}
      />
      <Comments onVideo={video}/>
    </div>
  );
}

export default App;
