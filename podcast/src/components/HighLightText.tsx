import { AssemblyAI } from "assemblyai";
import { useEffect, useState } from "react";
import { RESPONSE_DATA_TYPE } from "../types";
import { startApp } from "../assets";
export default function SpeechHighLight() {
  const client = new AssemblyAI({
    apiKey: "0406b3e1645d45fb876abaceee9a3ba5",
  });

  const audioUrl =
    "https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3";

  const params = {
    audio: audioUrl,
    speaker_labels: true,
  };

  const [datas, setDatas] = useState<RESPONSE_DATA_TYPE[]>([]);
  useEffect(() => {
    const run = async () => {
      const transcript = await client.transcripts.transcribe(params);
      const value: RESPONSE_DATA_TYPE[] = [];
      let index = 1;
      for (const utterance of transcript.utterances!) {
        value.push({
          position: index,
          content: utterance.text,
          id: index,
          timeStart: +utterance.start
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
          timeEnd: +utterance.end
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        });
        ++index;
      }
      setDatas(value);
      setTimeout(() => {
        startApp(value);
      }, 1000);
    };
    run();
  }, []);
  return !datas.length ? (
    <></>
  ) : (
    <main className="container">
      <div className="message"></div>
      <h1 className="fs-5 mb-3">1. First snowfall (Listen and Read)</h1>
      <div className="p-3 border rounded shadow bg-body-tertiary mb-4">
        <div className="row mb-4">
          <div className="col-lg-6">
            <div className="mb-3">
              <div className="border-2 rounded p-2">
                <div>
                  <audio
                    controls
                    className="w-100"
                    preload="auto"
                    id="js-audio"
                  >
                    <source
                      src="https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3"
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="text-danger hidden" id="audio-error-message">
                    Error! Cannot load audio!
                    <br />
                    Please try again later :(
                  </div>
                </div>
                <div className="text-center">
                  <div className="d-inline-flex align-items-center">
                    <button className="btn js-btn-prev">
                      <i className="bi bi-arrow-left">Prev</i>
                    </button>
                    <span className="mx-3">
                      <span className="js-current-position">1</span> /{" "}
                      {datas.length}
                    </span>
                    <button className="btn js-btn-next">
                      <i className="bi bi-arrow-right">Next</i>
                    </button>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ minHeight: "200px" }}
                >
                  <div className="flex-grow-1 text-center">
                    <div className="fs-5 js-top-text">1. First snowfall</div>
                    <div className="mt-2 text-muted">
                      <span className="js-top-translation"></span>
                      <button
                        className="btn btn-sm text-muted p-0 ms-1 me-2 fs-6 hidden js-btn-edit-trans"
                        data-translation-id
                        data-challenge-id
                        data-add-suggestion-url
                        title="Edit this translation"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-muted hidden d-md-block mb-4">
              <div>Press "Space" to Play/Pause</div>
              <div>
                Press <i className="bi bi-arrow-left"></i> and
                <i className="bi bi-arrow-right"></i> to move between sentences.
              </div>
            </div>
            <div className="mb-2">
              <button className="btn btn-outline-secondary btn-sm mb-4 js-show-transcript">
                Show transcript
              </button>
              <div className="js-transcript hidden">
                {datas?.map((item) => {
                  return (
                    <div className="mb-3" key={item.id}>
                      <span
                        className="transcript-text js-transcript-text cursor-pointer"
                        title={`${item.id}`}
                        data-position={`${item.id}`}
                        id={`btn-play-${item.id}`}
                      >
                        {item.content}
                      </span>
                      <div
                        className="text-secondary js-translation hidden"
                        id={`challenge-${item.id}-translation`}
                        data-original-text={item.content}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1 col-xl-5">
            <div>
              <div id="slickcomment"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
