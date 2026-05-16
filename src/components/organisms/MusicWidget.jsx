import { useEffect, useState } from "react";
import {
  getCurrentTrack,
  playPause,
  skipTrack,
} from "../../services/spotify/spotifyApi";
import ButtonIcon from "../molecules/ButtonIcon";
import Progress from "../atoms/Progress";
import Widget from "../organisms/Widget";

function MusicWidget({ token, onMusicClick }) {
  const [track, setTrack] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!token) return;

    const fetchTrack = async () => {
      if (document.hidden) return;

      const data = await getCurrentTrack(token);

      if (!isMounted) return;

      if (data) {
        setTrack(data);
        setIsPlaying(data.isPlaying);
        setProgress(data.progress_ms / 1000);
        setDuration(data.duration_ms / 1000);
      } else {
        setTrack(null);
      }
    };

    fetchTrack();

    const interval = setInterval(fetchTrack, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [token]);

  const handlePlayPause = async () => {
    const nextIsPlaying = !isPlaying;

    setIsPlaying(nextIsPlaying);
    await playPause(token, isPlaying);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (!token) {
    return (
      <Widget title="Spotify" actions={
        <ButtonIcon icon="Music" variant="clear" onClick={onMusicClick} className="btn-circle" />
      }>
        <div className="flex items-center justify-center p-6 text-center">
          <p className="text-sm italic opacity-70">Connectez-vous à Spotify</p>
        </div>
      </Widget>
    );
  }

  if (!track) {
    return (
      <Widget title="Spotify">
        <p className="text-center italic opacity-50">Chargement...</p>
      </Widget>
    );
  }

  return (
    <Widget title="Spotify" className="w-full">
      <div className="flex flex-col gap-4 rounded-xl bg-base-300/25 backdrop-blur-sm p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 shrink-0 shadow-xl rounded-lg overflow-hidden">
            <img
              src={track.albumCover}
              alt={track.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col overflow-hidden w-full">
            <p className="font-bold text-lg truncate text-base-content leading-tight">
              {track.title}
            </p>
            <p className="text-sm font-medium opacity-60 truncate text-base-content">
              {track.artist}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between w-full gap-3">
            <span className="text-xs font-bold opacity-50 w-10 text-right tabular-nums">
              {formatTime(progress)}
            </span>
            <div className="flex-1 w-full">
              <Progress
                value={progress}
                max={duration}
                variant="success"
                width="full"
              />
            </div>
            <span className="text-xs font-bold opacity-50 w-10 text-left tabular-nums">
              {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center justify-center gap-8 mt-1">
            <ButtonIcon
              icon="SkipBack"
              variant="clear"
              shape="circle"
              iconOnly={true}
              onClick={() => skipTrack(token, false)}
              className="text-base-content hover:text-primary transition-all duration-200 active:scale-90"
            />

            <ButtonIcon
              icon={isPlaying ? "Pause" : "Play"}
              variant="primary"
              shape="circle"
              iconOnly={true}
              onClick={handlePlayPause}
              className="shadow-md hover:shadow-primary/20 hover:shadow-lg transition-all duration-200 scale-125"
            />

            <ButtonIcon
              icon="SkipForward"
              variant="clear"
              shape="circle"
              iconOnly={true}
              onClick={() => skipTrack(token, true)}
              className="text-base-content hover:text-primary transition-all duration-200 active:scale-90"
            />
          </div>
        </div>
      </div>
    </Widget>
  );
}

export default MusicWidget;