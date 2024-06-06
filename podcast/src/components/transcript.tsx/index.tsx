import audioUrl from "@/assets/audios/demo-audio.mp3";
import { MOCK_DATA_HIGHLIGHT_TEXT } from "@/assets/mock";
import { useState } from "react";

const TranScript = () => {
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  return (
    <div>
      <div className="w-[60%] mx-auto border-[1px] border-[#ccc] p-10">
        <div>
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="flex justify-between items-center mt-5 bg-slate-300 p-5 ">
          <span className="text-[32px] text-blue-500">Transcript</span>
          <button onClick={() => setShowTranscript(!showTranscript)}>
            icon
          </button>
        </div>
        <div
          className={`${
            showTranscript ? "block" : "hidden"
          }  bg-slate-400 px-5`}
        >
          {MOCK_DATA_HIGHLIGHT_TEXT.map((data) => {
            return (
              <div>
                <p>{data.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TranScript;
