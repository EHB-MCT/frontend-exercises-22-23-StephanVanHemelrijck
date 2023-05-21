import React from 'react';

const Video = ({ videoId }) => {
    return (
        <div>
            <iframe
                title="basevideo"
                id="player"
                type="text/html"
                width="500"
                height="320"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
