// VideoItem.tsx
import React from 'react';

export interface IVideo {
  id: string;
  title: string;
  url: string;
}

interface VideoItemProps {
  video: IVideo;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <div className="video-item">
      <h2>{video.title}</h2>
      <iframe width="560" height="315" src={video.url} title={video.title} frameBorder="0" allowFullScreen></iframe>
    </div>
  );
};

export default VideoItem;
