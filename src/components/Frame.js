import React, {useState} from "react"

function Frame({ onVideo }) {
    const [upVote, setUpVote] = useState(9210)
    const [downVote, setDownVote] = useState(185)

    const handleUpVotes = () => {
        setUpVote(upVote + 1)
    }

    const handleDownVotes = () => {
        setDownVote(downVote + 1)
    }

    return (
        <div className="Frame">
            <iframe 
            title='"React Today and Tomorrow and 90% Cleaner React With Hooks"'
            width="900" 
            height="525" 
            src={onVideo.embedUrl} type="video/mp4"
            controls
            />
            <h2 type="text" value="title">{onVideo.title}</h2>
            <h4 
            type="text" 
            value="views">
            {onVideo.views} Views | Uploaded {onVideo.createdAt}
            </h4>
            <button onClick={handleUpVotes}>{upVote}👍</button>
            <button onClick={handleDownVotes}>{downVote}👎</button>
            <br />
            <br />
            
            
        </div>
    )
}

export default Frame;