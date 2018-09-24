import React from 'react';

const VideoDetail= (props) =>{
    const video=props.video;

    if(!video){
        return <div></div>;
    }  
    const videoId=video.id.videoId;
    const url=`http://www.youtube.com/embed/${videoId}`;
    

    return(
        <div className='video-play'>
        <div className='video-detail col-md-g'>
            <div className='embed-responsive embed-responsive-16by9'>
                  <iframe width="854" height="471" className='embed-responsive-item' src={url} allowFullScreen></iframe>
                  
            </div>
            <div className='details'>
                <div><h2>{video.snippet.title}</h2></div>
                
            </div>
        </div>
        </div>
    );
};

export default VideoDetail;