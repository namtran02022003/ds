// Initialize WaveSurfer once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create WaveSurfer instance
  var wavesurfer = WaveSurfer.create({
    container: "#waveform",
    // waveColor: 'rgb(200, 0, 200)',
    // progressColor: 'rgb(100, 0, 100)',
    backend: "MediaElement", // Use MediaElement backend for better compatibility
    // Adjust the URL to your MP3 file
    // url: 'audio.mp3'
    // Or if your audio file is served locally
    // url: '/path/to/audio.mp3'
  });

  // Load audio file
  wavesurfer.load("access/test.mp3");

  // Display total duration when audio is ready
  wavesurfer.on("ready", function () {
    var totalDurationElement = document.getElementById("totalDuration");
    var duration = wavesurfer.getDuration();
    totalDurationElement.textContent = formatTime(duration);
  });

  // Play/pause on button click
  var playButton = document.getElementById("playButton");
  const play = `<span class="material-symbols-outlined text-[34px]"> play_arrow </span>`;
  const pause = `<span class="material-symbols-outlined text-[34px]"> pause </span>`;
  playButton.addEventListener("click", function () {
    if (wavesurfer.isPlaying()) {
      wavesurfer.pause();
      playButton.innerHTML = play;
    } else {
      wavesurfer.play();
      playButton.innerHTML = pause;
    }
  });

  // Speed control
  //   var speedControl = document.getElementById("speedControl");
  //   speedControl.addEventListener("change", function () {
  //     var speed = parseFloat(speedControl.value);
  //     wavesurfer.setPlaybackRate(speed);
  //   });
  const speedButton = document.getElementById("speedButton");
  speedButton.addEventListener("click", () => {
    const speedBox = document.getElementById("speedContent");
    if (speedBox.style.display === "none" || !speedBox.style.display) {
      speedBox.style.display = "block";
    } else {
      speedBox.style.display = "none";
    }
  });
  // Update timeline
  wavesurfer.on("audioprocess", function () {
    var timeline = document.getElementById("timeline");
    var currentTime = wavesurfer.getCurrentTime();
    timeline.textContent = formatTime(currentTime);
  });

  // Format time function
  function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return pad(minutes) + ":" + pad(seconds);
  }

  // Pad function to add leading zeros
  function pad(number) {
    return (number < 10 ? "0" : "") + number;
  }
  // Volume control
  var volumeControl = document.getElementById("volume");
  volumeControl.addEventListener("input", function () {
    var volumeValue = parseFloat(volumeControl.value);
    wavesurfer.setVolume(volumeValue);
  });
  // Handle click icon volume
  const volumIcon = document.getElementById("volume_label");
  volumIcon.addEventListener("click", () => {
    wavesurfer.setVolume(0);
    volumeControl.value = 0;
  });
  // Rewind and Fast Forward functionality
  var rewindButton = document.getElementById("rewindButton");
  rewindButton.addEventListener("click", function () {
    console.log("Rewind button clicked"); // Check if the click event is registered
    var currentTime = wavesurfer.getCurrentTime();
    console.log("Current Time:", currentTime); // Check the current time
    var newTime = Math.max(0, currentTime - 10);
    console.log("New Time:", newTime); // Check the new time
    wavesurfer.seekTo(newTime);
  });

  var forwardButton = document.getElementById("forwardButton");
  forwardButton.addEventListener("click", function () {
    console.log("Forward button clicked"); // Check if the click event is registered
    var currentTime = wavesurfer.getCurrentTime();
    console.log("Current Time:", currentTime); // Check the current time
    var duration = wavesurfer.getDuration();
    console.log("Audio Duration:", duration); // Check the total duration
    var newTime = Math.min(duration, currentTime + 10);
    console.log("New Time:", newTime); // Check the new time
    wavesurfer.seekTo(newTime);
  });
  // Get list speed option
  const speedOptions = Array.from(document.querySelectorAll("#speedList span"));
  speedOptions.forEach((option) => {
    const data = option.getAttribute("data");
    option.addEventListener("click", () => {
      wavesurfer.setPlaybackRate(data);
      showSpeed();
      activeSpeed();
    });
  });
  //Active speed
  const activeSpeed = () => {
    speedOptions.forEach((option) => {
      option.classList.remove("bg-red-500");
    });
    const speedValue = wavesurfer.getPlaybackRate().toFixed(1);
    const element = document.querySelector(
      `#speedList span[data="${speedValue}"]`
    );
    if (element) {
      element.classList.add("bg-red-500");
    }
  };
  // Show speed
  const showSpeed = () => {
    const speedValue = wavesurfer.getPlaybackRate().toFixed(1) + "x";
    speedButton.innerText = speedValue;
    var speed = document.getElementById("speed");
    speed.innerText = speedValue;
    activeSpeed();
  };
  showSpeed();
  const speedUpButton = document.getElementById("speedUpButton");
  const speedDownButton = document.getElementById("speedDownButton");
  speedUpButton.onclick = () => {
    const speedValue = wavesurfer.getPlaybackRate();
    if (speedValue < 3) {
      wavesurfer.setPlaybackRate(parseFloat(speedValue + 0.1));
    }
    showSpeed();
  };
  speedDownButton.onclick = () => {
    const speedValue = wavesurfer.getPlaybackRate();
    if (speedValue >= 0.6) {
      wavesurfer.setPlaybackRate(parseFloat(speedValue - 0.1));
    }
    showSpeed();
  };
});
