import { MOCK_DATA_CARDS } from "@/assets/mock";
import "@/assets/styles/components/FlashCard.scss";
import { useEffect, useState } from "react";
type FlashCardType = {
  key: number;
  text: string;
  ipa1: string;
  ipa2: string;
  audio1: string;
  audio2: string;
  description: string;
  type: string;
};
const FlashCard = () => {
  const [dataCards, setDataCards] = useState<FlashCardType[]>(MOCK_DATA_CARDS);
  const handleClickCard = (flag: number) => {
    const newDatas = dataCards.map((item) => {
      if (item.key === 0) {
        item.key = flag;
      } else {
        item.key = item.key + flag;
      }
      return item;
    });
    setDataCards(newDatas);
  };
  const getCurrentCard = () => {
    return dataCards.findIndex((card) => card.key == 0) + 1;
  };

  return (
    <div className="main-flash-card">
      <div className="with-top-tab with-tab-lists top-section-lists">
        <div className="body-wrapper">
          <div className="fixed-tray"></div>
          <div id="page" className="page">
            <div className="pageContent clearfloat" id="pageContent">
              <div className="page-unit lists-3 with-header-padding type-work">
                <div className="limited-width">
                  <div className="summary-activities">
                    <div className="summary-panel"></div>
                    <div className="activities-panel">
                      <div className="flashcards" data-anonymous="true">
                        <h3>
                          Learn words with Flashcards and other activities
                        </h3>
                        <div className="flashcard-panel">
                          <div className="list-selector my-5">
                            Vocabulary list:
                            <select name="listid">
                              <option value="9442356">Chapters 1–4</option>

                              <option value="9442358">Chapters 5–11</option>

                              <option value="9442359">Chapters 12–17</option>

                              <option value="9442360">Chapters 18–22</option>

                              <option value="9442362">Chapters 23–30</option>
                            </select>
                          </div>
                          <div className="flashcard-app">
                            <div id="cards-container" className="cards">
                              {dataCards.map((val: FlashCardType) => {
                                return (
                                  <Card content={val} key={val.key + ""} />
                                );
                              })}
                            </div>
                            {/* <div className="shuffle">
                              <button
                                type="button"
                                onClick={shuffleCards}
                                className="btn-shuffle"
                              >
                                Shuffle
                              </button>
                            </div> */}
                            <div className="controls mt-3">
                              <button
                                id="pre"
                                type="button"
                                className="button prev"
                                onClick={() => handleClickCard(1)}
                                disabled={getCurrentCard() == 1}
                              >
                                Previous
                              </button>
                              <span className="progress">
                                <span className="count">
                                  {getCurrentCard()}
                                </span>
                                <span className="of">/</span>
                                <span className="total">
                                  {dataCards.length}
                                </span>
                              </span>
                              <button
                                id="next"
                                type="button"
                                className="button next"
                                onClick={() => handleClickCard(-1)}
                                disabled={getCurrentCard() == dataCards.length}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Card({ content }: { content: FlashCardType }) {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const handleShowDes = (e: any) => {
    const audioElement = document.querySelectorAll(
      ".a-key-0"
    ) as NodeListOf<HTMLAudioElement>;
    if (!Array.from(audioElement).includes(e.target)) {
      if (content.key == 0) {
        setShowDescription(!showDescription);
        return;
      }
      setShowDescription(false);
    }
  };
  useEffect(() => {
    setShowDescription(false);
  }, [content]);
  const playAudio = (index: number) => {
    const audioElement = document.querySelectorAll(
      ".audio-key-0"
    ) as NodeListOf<HTMLAudioElement>;
    console.log(audioElement);
    if (audioElement) {
      audioElement[index].play();
    }
  };
  return (
    <div className="card" data-pos={content.key} id={content.key + ""}>
      <div className="faces" onClick={handleShowDes}>
        <div className="front">
          <div className="inner-border">
            <div className="word">{content.text}</div>
            <div className="variants">
              <div className="ipa-variant top">
                <div className="audios with-audio">
                  <a
                    onClick={() => playAudio(0)}
                    className={`audio a-key-${content.key}`}
                  >
                    <audio
                      className={`pron-audio audio-key-${content.key}`}
                      src={content.audio1}
                    ></audio>
                  </a>
                </div>
                <div className="ipas">
                  <div className="flag">
                    <img src="https://cdn.vocab.com/js3/289804eefb36d3e17d26.svg" />
                  </div>
                  <span id="ipa">{content.ipa1}</span>
                </div>
              </div>
              <div className="ipa-variant bottom">
                <div className="audios with-audio">
                  <a
                    onClick={() => playAudio(1)}
                    className={`audio a-key-${content.key}`}
                  >
                    <audio
                      className={`pron-audio audio-key-${content.key}`}
                      src={content.audio2}
                    ></audio>
                  </a>
                </div>
                <div className="ipas">
                  <div className="flag">
                    <img src="https://cdn.vocab.com/js3/4ca9ab6cd2940a46a096.svg" />
                  </div>
                  <span id="ipa">{content.ipa2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`back ${
            showDescription ? "rotate-y-none" : "rotate-y-180"
          }`}
        >
          <div className="inner-border">
            <div className="img-definition">
              <img />
              <div className="pos-def">
                <span className="pos">{content.type}</span>
                <span className="def">{content.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlashCard;
