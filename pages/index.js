import { useState } from 'react';
import { albumList, artistList, genreList } from '../assets/additionalAssets';
import { songList } from '../assets/songList';
import { AudioPlayer } from '../components/AudioPlayer';
import { FilterInput } from '../components/FilterInput';

export default function Home() {
  const [genreFilter, setGenreFilter] = useState('');
  const [artistFilter, setArtistFilter] = useState('');
  const [albumFilter, setAlbumFilter] = useState('');
  const [activeSong, setActiveSong] = useState(songList[0]);

  return (
    <div>
      <header>
        <img src="/play.svg" alt="play" />
        <h1>SOUNDIFY</h1>
      </header>
      <AudioPlayer activeSong={activeSong} />
      <section className="filter-section">
        <FilterInput
          options={genreList}
          value={genreFilter}
          filterSetter={setGenreFilter}
          name="genre"
        />
        <FilterInput
          options={artistList}
          value={artistFilter}
          filterSetter={setArtistFilter}
          name="artist"
        />
        <FilterInput
          options={albumList}
          value={albumFilter}
          filterSetter={setAlbumFilter}
          name="album"
        />
      </section>
      <div className="song-list">
        <div className="song-header">
          <div>name</div>
          <div>album </div>
          <div>Year </div>
          <div>Artist </div>
          <div>play</div>
          <div>genre</div>
        </div>
        {songList
          .filter((song) => {
            let isVisible = true;
            if (genreFilter && genreFilter !== song.genre) {
              isVisible = false;
            }
            if (artistFilter && artistFilter !== song.artist) {
              isVisible = false;
            }
            if (albumFilter && albumFilter !== song.album) {
              isVisible = false;
            }
            return isVisible;
          })
          .map((song) => {
            return (
              <div
                key={song.id}
                className="song-container"
                onDoubleClick={() => {
                  setActiveSong(song);
                }}
              >
                <div className="song-title">{song.name}</div>
                <div>{song.album}</div>
                <div>{song.release}</div>
                <div>{song.artist}</div>
                <button
                  className="song-play"
                  onClick={() => {
                    setActiveSong(song);
                  }}
                >
                  <img src="/play.svg" alt="play" />
                </button>
                <div>{song.genre}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
