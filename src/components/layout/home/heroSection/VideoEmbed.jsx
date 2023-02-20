import React from "react";

const VideoEmbed = () => ( 
    <div className = "video-responsive" >
    <iframe width = "853"
    height = "480"
    src = { `https://youtu.be/MVuKxKvniME` }
    frameBorder = "0"
    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
    </div>
);
export default VideoEmbed