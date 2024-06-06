import { useRef, useMemo, useCallback, useState, useEffect } from "react";
import audioUrl from "@/assets/audios/demo-audio.mp3";
import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";
import { useWavesurfer } from "@wavesurfer/react";
import WaveSurfer from "wavesurfer.js";
import { memo } from "react";
import "@/assets/styles/components/WaveSurfer.scss";
import { formatTimeWaveSurfer } from "@/utils/waveSurfer";
const Waveform = ({ setAudioElement }: any) => {
  const waveformRef = useRef(null);
  const { wavesurfer, isPlaying } = useWavesurfer({
    container: waveformRef,
    waveColor: "#ddd",
    progressColor: "#ff5500",
    cursorColor: "#ff5500",
    height: 200,
    url: audioUrl,
    plugins: useMemo(() => [Timeline.create()], []),
  });

  useEffect(() => {
    setAudioElement(wavesurfer?.getMediaElement());
  }, [wavesurfer]);

  return (
    <div className="main-audio">
      <div ref={waveformRef} />
      <div className="flex mt-5 content-action">
        <ControAudioComponent wavesurfer={wavesurfer} isPlaying={isPlaying} />
        <div className="flex min-w-[110px]  items-center justify-center px-2 ">
          <WaveformCurrentTime wavesurfer={wavesurfer} />
          <p>/</p>
          <div id="totalDuration">
            {formatTimeWaveSurfer(wavesurfer?.getDuration())}
          </div>
        </div>
      </div>
    </div>
  );
};
const ControlAudio = ({
  wavesurfer,
  isPlaying,
}: {
  wavesurfer: WaveSurfer | null;
  isPlaying: boolean;
}) => {
  const [speedControl, setSpeedControl] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);
  const volomeControl = useCallback(
    (e: any) => {
      wavesurfer?.setVolume(parseFloat(e.target.value));
    },
    [wavesurfer]
  );
  console.log("run control");
  const SPEED_LIST = [
    {
      text: "0.5",
      value: 0.5,
    },
    {
      text: "1.0",
      value: 1.0,
    },
    {
      text: "1.2",
      value: 1.2,
    },
    {
      text: "1.5",
      value: 1.5,
    },
    {
      text: "2.0",
      value: 2.0,
    },
    {
      text: "3.0",
      value: 3.0,
    },
  ];
  useEffect(() => {
    wavesurfer?.setPlaybackRate(playbackRate);
  }, [playbackRate]);
  console.log(playbackRate);
  const handleSpeed = (flag: number) => {
    const value = playbackRate + flag;
    setPlaybackRate(+value.toFixed(1));
  };
  return (
    <div className="w-full flex justify-between items-center py-2 px-10">
      <div className="title w-[40%]">
        <div className="flex">
          <div className="min-w-[100px]">
            <img src="access/eng_img.png" alt="img" />
          </div>
          <div className="w-[40%]">
            <div className="marquee">
              <p>this is a text</p>
            </div>
            <p className="">Description...</p>
            <p className="">Description...</p>
          </div>
        </div>
      </div>
      <div id="controlsContainer" className="w-[40%]">
        <div className="flex justify-center">
          <button id="forwardButton" className="mx-6 btn js-btn-prev">
            <span className="material-symbols-outlined"> replay_10 </span>
          </button>
          <button id="playButton" onClick={onPlayPause} className="mx-6 btn ">
            <span className="material-symbols-outlined text-[34px]">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>
          <button id="rewindButton" className="mx-6 js-btn-next">
            <span className="material-symbols-outlined"> forward_10 </span>
          </button>
          <div className="flex items-center relative ms-5">
            <button
              id="speedButton"
              onClick={() => {
                setSpeedControl(!speedControl);
              }}
              className="rounded-[20px] border-[1px] px-3 active:bg-red-500"
            >
              {playbackRate.toFixed(1)}x
            </button>
            {speedControl && (
              <div className="absolute top-[0px] translate-y-[-100%] translate-x-[-50%] z-50 bg-white p-5 rounded-2xl box-speed  ms-5">
                <div id="speedList">
                  {SPEED_LIST.map((speed) => (
                    <span
                      onClick={() => setPlaybackRate(speed.value)}
                      key={speed.value}
                      className={`cursor-pointer ${
                        playbackRate == speed.value ? "bg-red-500" : ""
                      }`}
                    >
                      {speed.text}
                    </span>
                  ))}
                </div>
                <div className="content-speed flex justify-around items-center py-4">
                  <div>
                    <button
                      className="border-[1px] border-[#1A73E8] rounded-[50%] flex items-center"
                      disabled={playbackRate == 0.5}
                      onClick={() => handleSpeed(-0.1)}
                    >
                      <span className="material-symbols-outlined leading-[16px] text-[#1A73E8] text-[16px]">
                        remove
                      </span>
                    </button>
                  </div>
                  <div>
                    <p id="speed" className="text-[32px]">
                      {playbackRate.toFixed(1)}x
                    </p>
                  </div>
                  <div>
                    <button
                      className="border-[1px] border-[#1A73E8] rounded-[50%] flex items-center"
                      disabled={playbackRate == 3}
                      onClick={() => handleSpeed(0.1)}
                    >
                      <span className="material-symbols-outlined leading-[16px] text-[#1A73E8] text-[16px]">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <button
                    className="flex items-center"
                    onClick={() => {
                      setSpeedControl(!speedControl);
                    }}
                  >
                    <span className="material-symbols-outlined p1-2">done</span>
                    Xong
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-[20%]">
        <div className="flex items-center justify-end">
          <div id="volumeControl" className="flex items-center">
            <label id="volume_label" htmlFor="volume">
              <span className="material-symbols-outlined relative bottom-[-3px]">
                volume_up
              </span>
            </label>
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.01"
              defaultValue={1}
              onChange={volomeControl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const WaveformCurrentTime = ({
  wavesurfer,
}: {
  wavesurfer: WaveSurfer | null;
}) => {
  return (
    <div id="timeline">
      {formatTimeWaveSurfer(wavesurfer?.getCurrentTime())}
    </div>
  );
};
export const ControAudioComponent = memo(ControlAudio);
export default Waveform;
