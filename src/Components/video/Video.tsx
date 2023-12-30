import React, { useRef } from "react";
import video from "../../assets/video/Reel.mp4";
import VideoPlayerHook from "hooks/VideoPlayerHook";
import { BsPause, BsPlay, BsVolumeUp, BsVolumeMute } from "react-icons/bs";

const Video: React.FC = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = VideoPlayerHook(videoElement);
  return (
    <div className=" bg-black border-2 border-orange-400">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          {/* pause and play section */}
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <BsPlay className="text-white text-[30px]" />
              ) : (
                <BsPause className="text-white text-[30px]" />
              )}
            </button>
          </div>
          {/* progress input section */}
          <input
            type="range"
            min={"0"}
            max={"100"}
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          {/* select playback speed section */}
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.5" className="text-slate-500 text-xs">
              0.50x
            </option>
            <option value="1" className="text-slate-500 text-xs">
              1x
            </option>
            <option value="1.25" className="text-slate-500 text-xs">
              1.25x
            </option>
            <option value="2" className="text-slate-500 text-xs">
              2x
            </option>
          </select>
          {/* mute and unmute button */}
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <BsVolumeUp className="i" />
            ) : (
              <BsVolumeMute className="i" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
