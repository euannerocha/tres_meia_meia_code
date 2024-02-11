// VideoGallery.tsx
import React, { useEffect, useState } from 'react';
import VideoItem, { IVideo } from './videoItem';

const VideoGallery: React.FC = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('sua-url-de-api/videos');
        if (!response.ok) {
          throw new Error('Erro ao buscar vídeos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-gallery">
      <h1>Galeria de Vídeos</h1>
      <div className="videos">
        {videos.map((video: IVideo) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
