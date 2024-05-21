import { RESPONSE_DATA_TYPE } from "../types";

const startApp = (responseData:RESPONSE_DATA_TYPE[]) => {
  console.info("Begin app listen & read");

  // Element references
  const audioElement = document.getElementById("js-audio");
  const errorMessage = document.getElementById("audio-error-message");
  const transcriptTexts = document.querySelectorAll(".js-transcript-text");
  const topTextElement = document.querySelector(".js-top-text");
  const topTranslationElement = document.querySelector(".js-top-translation");
  const prevButton = document.querySelector(".js-btn-prev");
  const nextButton = document.querySelector(".js-btn-next");
  const showTranscriptButton = document.querySelector(".js-show-transcript");
  const transcriptElement = document.querySelector(".js-transcript");
  const currentPositionElement = document.querySelector(".js-current-position");

  // Constants
  const pauseIconClass = "bi-pause-circle";
  const playIconClass = "bi-play-circle";

  // Variables
  let activeTranscript = null;
  let activePlayButton = null;
  let currentPosition = -1;
  let isTopTextClicked = false;
  let positionToTimeStartMap = {};
  let transcriptElements = {};
  let playButtonElements = {};

  // Function to update the top translation element
  function updateTopTranslation() {
    if (activeTranscript) {
      const translationElement = activeTranscript.parentElement.querySelector(".js-translation");
      const editButton = translationElement.querySelector(".js-btn-edit-trans");

      topTranslationElement.innerHTML = translationElement.textContent;

      if (editButton) {
        const topEditButton = topTranslationElement.parentElement.querySelector(".js-btn-edit-trans");
        ["data-translation-id", "data-challenge-id", "data-add-suggestion-url"].forEach(attr => {
          topEditButton.setAttribute(attr, editButton.getAttribute(attr));
        });
        topEditButton.classList.remove("d-none");
      }
    }
  }

  // Function to handle next button click
  function handleNextButtonClick() {
    audioElement.blur();
    if (audioElement.paused) audioElement.play();
    if (currentPosition < responseData.length) {
      audioElement.currentTime = currentPosition < 1 ? positionToTimeStartMap[1] - 0.4 : positionToTimeStartMap[currentPosition + 1] - 0.4;
      audioElement.play();
    }
  }

  // Function to handle previous button click
  function handlePrevButtonClick() {
    audioElement.blur();
    if (audioElement.paused) audioElement.play();
    if (currentPosition > 1) {
      audioElement.currentTime = positionToTimeStartMap[currentPosition - 1] - 0.4;
      audioElement.play();
    }
  }

  // Initialize position to time start map
  responseData.forEach(data => {
    positionToTimeStartMap[data.position] = data.timeStart;
  });

  // Initialize transcript and play button elements
  transcriptTexts.forEach(text => {
    const position = parseInt(text.getAttribute("data-position"));
    const playButton = document.getElementById(`btn-play-${position}`);

    transcriptElements[position] = text;
    playButtonElements[position] = playButton;

    playButton.addEventListener("click",async () => {
      console.info(`btn play #${position} is clicked`);
      if (playButton.classList.contains(pauseIconClass)) {
       await audioElement.pause();
        playButton.classList.add(playIconClass);
        playButton.classList.remove(pauseIconClass);
      } else {
        audioElement.currentTime = positionToTimeStartMap[position] - 0.4;
     await audioElement.play();
        playButton.classList.add(pauseIconClass);
        playButton.classList.remove(playIconClass);
      }
    });

    playButton.addEventListener("focus", () => {
      playButton.blur();
    });
  });

  // Audio element event listeners
  audioElement.addEventListener("timeupdate", () => {
    const currentTime = audioElement.currentTime + 0.5;

    for (let i = 0; i < responseData.length; i++) {
      const data = responseData[i];
      if (currentTime >= data.timeStart && currentTime < data.timeEnd) {
        if (currentPosition === data.position) return;

        currentPosition = data.position;
        if (activeTranscript) activeTranscript.classList.remove("active");
        if (activePlayButton) {
          activePlayButton.classList.add(playIconClass);
          activePlayButton.classList.remove(pauseIconClass);
        }

        activeTranscript = transcriptElements[data.position];
        activePlayButton = playButtonElements[data.position];

        if (activeTranscript) {
          activeTranscript.classList.add("active");
          topTextElement.innerHTML = activeTranscript.innerHTML;
          if (currentPosition > 0) currentPositionElement.innerHTML = currentPosition;
          updateTopTranslation();
        }

        if (activePlayButton) {
          activePlayButton.classList.add(pauseIconClass);
          activePlayButton.classList.remove(playIconClass);
        }

        break;
      }
    }
  });

  audioElement.addEventListener("loadstart", () => {
    console.log("starting to load audio");
  });

  audioElement.addEventListener("ended", () => {
    if (activeTranscript) activeTranscript.classList.remove("active");
    activeTranscript = null;
    currentPosition = -1;
  });

  audioElement.addEventListener("pause", () => {
    if (activePlayButton) {
      activePlayButton.classList.add(playIconClass);
      activePlayButton.classList.remove(pauseIconClass);
    }
  });

  audioElement.addEventListener("play", () => {
    if (activePlayButton) {
      activePlayButton.classList.add(pauseIconClass);
      activePlayButton.classList.remove(playIconClass);
    }
  });

  audioElement.addEventListener("loadeddata", () => {
    errorMessage.classList.add("d-none");
    console.info("Audio loaded");
  });

  audioElement.addEventListener("canplay", () => {
    console.info("Audio can be played");
  });

  audioElement.addEventListener("error", () => {
    errorMessage.classList.remove("d-none");
    console.error("Error when loading audio");
  });

  audioElement.load();

  // Keyboard event listener
  document.addEventListener("keydown", (e) => {
    if (document.activeElement === document.body) {
      if (e.code === "Space") {
        audioElement.blur();
        e.preventDefault();
        audioElement.paused ? audioElement.play() : audioElement.pause();
      } else if (e.code === "ArrowLeft") {
        handlePrevButtonClick();
      } else if (e.code === "ArrowRight") {
        handleNextButtonClick();
      }
    }
  });

  // Button event listeners
  prevButton.addEventListener("click", (e) => {
    handlePrevButtonClick();
    e.currentTarget.blur();
  });

  nextButton.addEventListener("click", (e) => {
    handleNextButtonClick();
    e.currentTarget.blur();
  });

  topTextElement.addEventListener("click", () => {
    if (!isTopTextClicked && audioElement.paused) {
      audioElement.play();
      topTextElement.innerHTML = "...";
      isTopTextClicked = true;
    }
  });

  showTranscriptButton.addEventListener("click", () => {
    transcriptElement.classList.remove("hidden");
    showTranscriptButton.classList.add("hidden");
  });

  console.log("Initiated app listen & read.");
};

export { startApp };
