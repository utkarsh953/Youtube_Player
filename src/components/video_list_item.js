import React from 'react'

const VideoListItem = ({video , onVideoSelect}) => {
//   the above code is similar to -- const video = video.props;
  const imageUrl = video.snippet.thumbnails.default.url;

return (
<li onClick = { () => onVideoSelect (video) } className = 'list-group-data'>
<div className = 'video-list-media'>
<div className = 'media-left'>
<img className = 'media-object' src = {imageUrl} />
</div>
<div className = 'media-body'>
<div classname = 'media-heading'>{video.snippet.title}</div>
</div>
</div>
</li>
);
}
export default VideoListItem;