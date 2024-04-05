import React, { useState } from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
}

interface PlaylistProps {
  songs: Song[];
}

const Playlist: React.FC<PlaylistProps> = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const renderSongs = () => {
    return songs.map((song, index) => (
      <div key={song.id}>
        <p>
          {song.title} - {song.artist}
        </p>
        <button onClick={() => playSong(index)}>Play</button>
      </div>
    ));
  };

  const renderPlayer = () => {
    if (currentSongIndex !== null) {
      const currentSong = songs[currentSongIndex];
      return (
        <div>
          <audio src={currentSong.url} controls autoPlay={isPlaying} />
          <button onClick={pauseSong}>Pause</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Playlist</h2>
      <div>{renderSongs()}</div>
      {renderPlayer()}
    </div>
  );
};

export default Playlist;
