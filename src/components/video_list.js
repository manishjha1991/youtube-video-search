import React from 'react';
const VideoLink = (props) =>{
    return (
        <ul className ="col-md-4 list-group">
            {props.videos.length}
        </ul>    

    )
}
export default VideoLink;