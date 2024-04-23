import { AssemblyAI } from "assemblyai";
import { useEffect, useState } from "react";
import { startApp } from "./assets/index.ts";
import "./App.css";
// import { MOCK_DATAS } from "./constans/index.ts";
import { RESPONSE_DATA_TYPE } from "./types/index.ts";
export default function App() {
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
      let value = [];
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
            <div className="mb-2">
              <label htmlFor="select-translation" className="text-secondary">
                <i className="bi bi-translate"></i>
                Translation
              </label>
              <select
                className="form-select d-inline-block w-auto form-select-sm"
                id="select-translation"
              >
                <option value="">No translation</option>
                <option value="af">Afrikaans</option>
                <option value="sq">Albanian</option>
                <option value="am">Amharic</option>
                <option value="ar">Arabic</option>
                <option value="hy">Armenian</option>
                <option value="az">Azerbaijani</option>
                <option value="eu">Basque</option>
                <option value="be">Belarusian</option>
                <option value="bn">Bengali</option>
                <option value="bs">Bosnian</option>
                <option value="bg">Bulgarian</option>
                <option value="ca">Catalan</option>
                <option value="ceb">Cebuano</option>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese (Traditional)</option>
                <option value="co">Corsican</option>
                <option value="hr">Croatian</option>
                <option value="cs">Czech</option>
                <option value="da">Danish</option>
                <option value="nl">Dutch</option>
                <option value="eo">Esperanto</option>
                <option value="et">Estonian</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="fy">Frisian</option>
                <option value="gl">Galician</option>
                <option value="ka">Georgian</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="gu">Gujarati</option>
                <option value="ht">Haitian Creole</option>
                <option value="ha">Hausa</option>
                <option value="haw">Hawaiian</option>
                <option value="he">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="hmn">Hmong</option>
                <option value="hu">Hungarian</option>
                <option value="is">Icelandic</option>
                <option value="ig">Igbo</option>
                <option value="id">Indonesian</option>
                <option value="ga">Irish</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="jv">Javanese</option>
                <option value="kn">Kannada</option>
                <option value="kk">Kazakh</option>
                <option value="km">Khmer</option>
                <option value="rw">Kinyarwanda</option>
                <option value="ko">Korean</option>
                <option value="ku">Kurdish</option>
                <option value="ky">Kyrgyz</option>
                <option value="lo">Lao</option>
                <option value="lv">Latvian</option>
                <option value="lt">Lithuanian</option>
                <option value="lb">Luxembourgish</option>
                <option value="mk">Macedonian</option>
                <option value="mg">Malagasy</option>
                <option value="ms">Malay</option>
                <option value="ml">Malayalam</option>
                <option value="mt">Maltese</option>
                <option value="mi">Maori</option>
                <option value="mr">Marathi</option>
                <option value="mn">Mongolian</option>
                <option value="my">Myanmar (Burmese)</option>
                <option value="ne">Nepali</option>
                <option value="no">Norwegian</option>
                <option value="ny">Nyanja (Chichewa)</option>
                <option value="or">Odia (Oriya)</option>
                <option value="ps">Pashto</option>
                <option value="fa">Persian</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese (Portugal, Brazil)</option>
                <option value="pa">Punjabi</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sm">Samoan</option>
                <option value="gd">Scots Gaelic</option>
                <option value="sr">Serbian</option>
                <option value="st">Sesotho</option>
                <option value="sn">Shona</option>
                <option value="sd">Sindhi</option>
                <option value="si">Sinhala (Sinhalese)</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="so">Somali</option>
                <option value="es">Spanish</option>
                <option value="su">Sundanese</option>
                <option value="sw">Swahili</option>
                <option value="sv">Swedish</option>
                <option value="tl">Tagalog (Filipino)</option>
                <option value="tg">Tajik</option>
                <option value="ta">Tamil</option>
                <option value="tt">Tatar</option>
                <option value="te">Telugu</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="tk">Turkmen</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="ug">Uyghur</option>
                <option value="uz">Uzbek</option>
                <option value="vi">Vietnamese</option>
                <option value="cy">Welsh</option>
                <option value="xh">Xhosa</option>
                <option value="yi">Yiddish</option>
                <option value="yo">Yoruba</option>
                <option value="zu">Zulu</option>
              </select>
              <span
                className="spinner-border d-none"
                style={{ width: "1rem", height: "1rem" }}
                role="status"
                id="translation-loading-icon"
              >
                <span className="visually-hidden text-secondary">
                  Loading...
                </span>
              </span>
            </div>
            <div className="mb-3">
              <div className="border border-2 rounded p-2">
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
                  <div className="text-danger d-none" id="audio-error-message">
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
                      <span className="js-current-position">1</span> / 21
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
                        className="btn btn-sm text-muted p-0 ms-1 me-2 fs-6 d-none js-btn-edit-trans"
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
            <div className="text-muted d-none d-md-block mb-4">
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
              <div className="js-transcript d-none">
                {datas?.map((item) => {
                  return (
                    <div className="mb-3" key={item.id}>
                      <button
                        className="btn p-3 me-1 bi bi-play-circle fs-4 js-btn-play"
                        id={`btn-play-${item.id}`}
                        style={{ lineHeight: 0 }}
                      >
                        play
                      </button>
                      <span
                        className="transcript-text js-transcript-text"
                        title={`${item.id}`}
                        data-position={`${item.id}`}
                        id={`challenge-${item.id}-content`}
                      >
                        {item.content}
                      </span>
                      <div
                        className="text-secondary js-translation d-none"
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
